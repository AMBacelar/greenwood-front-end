import { randomColor } from 'utils/randomColour';
import { slugify } from 'utils/createSlug';
import { createAccessToken, createRefreshToken } from './auth';
import { sendRefreshToken } from './sendRefreshToken';
import { verify } from 'jsonwebtoken';
import { GraphQLResolveInfo } from 'graphql';
import { nanoid } from 'nanoid';

const buildSessionParams = (ctx: any) => {
  let paramObj = {
    database: null,
    bookmarks: null,
  };

  if (ctx.neo4jDatabase) {
    paramObj['database'] = ctx.neo4jDatabase;
  }

  if (ctx.neo4jBookmarks) {
    paramObj['bookmarks'] = ctx.neo4jBookmarks;
  }
  return paramObj;
};

const runQuery = async (
  query: string,
  context: any,
  _resolveInfo: GraphQLResolveInfo,
  built = true
) => {
  let session;
  if (context.neo4jDatabase || context.neo4jBookmarks) {
    const sessionParams = buildSessionParams(context);
    try {
      // connect to the specified database and/or use bookmarks
      // must be using 4.x version of driver
      session = context.driver.session(sessionParams);
    } catch (e) {
      // throw error if bookmark is specified as failure is better than ignoring user provided bookmark
      if (context.neo4jBookmarks) {
        throw new Error(
          `context.neo4jBookmarks specified, but unable to set bookmark in session object: ${e.message}`
        );
      }
    }
  } else {
    // no database or bookmark specified
    session = context.driver.session();
  }

  let result;

  result = await session.run(query);
  result = result.records[0].get(0);
  session.close();
  return built ? result.properties : result;
};

const authFunctions = {
  authenticate: async (
    _root: any,
    args: any,
    context: any,
    resolveInfo: GraphQLResolveInfo
  ) => {
    const { fieldName, id, displayName, email } = args;
    const findUser = `
    MATCH (user: User {${fieldName}: "${id}"})
    RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;
    const createUser = `
    CREATE (user:User:Contactable:ContentMetaReference { userId: apoc.create.uuid(), ${fieldName}: "${id}", displayName: "${displayName}", forename: "", familyName: "" })-[:HAS_CONTACT]->(c:Contact { contactId: apoc.create.uuid(), email: ["${email}"], telephone: []})
    RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;
    let user;
    try {
      user = await runQuery(findUser, context, resolveInfo, false);
    } catch (error) {
      console.log('authenticate error', error);
      user = await runQuery(createUser, context, resolveInfo, false);
    } finally {
      console.log(user);
      sendRefreshToken(context.res, createRefreshToken(user));
      return {
        accessToken: createAccessToken(user),
        ok: true,
        user,
      };
    }
  },
  refreshToken: async (
    _root: any,
    _args: any,
    context: any,
    resolveInfo: GraphQLResolveInfo
  ) => {
    const token = context.req.cookies['grnwood-network-refresh'];
    if (!token) {
      return { ok: false, accessToken: '' };
    }

    let payload = null;
    try {
      payload = <any>verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      return { ok: false, accessToken: '' };
    }

    const findUser = `
    MATCH (user: User { userId: "${payload.userId}"})
    RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;

    let user;
    try {
      user = await runQuery(findUser, context, resolveInfo, false);
    } catch (error) {
      if (!user) {
        return { ok: false, accessToken: '' };
      }
      console.log('RefreshToken: find user error', error);
    } finally {
      sendRefreshToken(context.res, createRefreshToken(user));
      return {
        accessToken: createAccessToken(user),
        ok: true,
      };
    }
  },
};

export const resolvers = {
  Query: {
    ...authFunctions,
    getTokens: async (
      _root: any,
      _args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const token = context.req.cookies['sessionCookie'];

      const emptyUser = {
        displayName: '',
        userId: '',
        contact: {
          email: [''],
        },
      };
      if (!token) {
        return { ok: false, accessToken: '', user: emptyUser };
      }

      const findUser = `
      MATCH (user: User { userId: "${context.req.session.passport.user.userId}"})
      RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;

      let user;
      try {
        user = await runQuery(findUser, context, resolveInfo, false);
      } catch (error) {
        console.log('so, there seems to be an error');
        console.log('GetTokens: find user error', error);
        if (!user) {
          return { ok: false, accessToken: '', user: emptyUser };
        }
      } finally {
        sendRefreshToken(context.res, createRefreshToken(user));
        return {
          accessToken: createAccessToken(user),
          user,
          ok: true,
        };
      }
    },
    getBusinessByUserId: async (
      _root: any,
      _args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const token = context.req.cookies['sessionCookie'];

      if (!token) {
        return { ok: false, businesses: [] };
      }

      const findBusinesses = `
      MATCH (user: User { userId: "${context.req.session.passport.user.userId}"})-[:MANAGES]->(b:Business)
      RETURN b`;

      let businesses;
      try {
        businesses = await runQuery(
          findBusinesses,
          context,
          resolveInfo,
          false
        );
      } catch (error) {
        console.log('getBusinessByUserId: find businesses error', error);
        if (!businesses) {
          return { ok: false, businesses: [] };
        }
      } finally {
        return {
          businesses,
          ok: true,
        };
      }
    },
  },
  Mutation: {
    ...authFunctions,
    updateUserProfile: async (
      _root: any,
      args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const userId = context.req.session.passport
        ? context.req.session.passport.user.userId
        : args.userInput.userId;

      const updateUser = `match (u: User {userId: "${userId}"})-[r]->(c:Contact {contactId: "${args.userInput.contact.contactId}"})
      set u.forename = "${args.userInput.forename}"
      set u.familyName = "${args.userInput.familyName}"
      set u.displayName = "${args.userInput.displayName}"
      set u.displayImage = "${args.userInput.displayImage}"
      set u.about = "${args.userInput.about}"
      set c.telephone = ['${args.userInput.contact.telephone}']
      set c.email = ['${args.userInput.contact.email}']
      set c.socials = []
      return u{ .*, contact: c{ .* }} as user`;
      return await runQuery(updateUser, context, resolveInfo, false);
    },
    userCreateBusiness: async (
      _root: any,
      args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const {
        name,
        description,
        // displayImage,
        // gallery,
        // bannerImage,
      } = args.businessInput;
      /**
       * first, create the business object
       * second, attack business to user object
       * third, connect auxilliary objects IF they exist
       */
      const token = context.req.cookies['sessionCookie'];

      if (!token) {
        return { ok: false, business: {} };
      }

      const createBusiness = `
       MATCH (u: User {userId: "${context.req.session.passport.user.userId}"})
       MERGE (u)-[r:MANAGES]->(b: Business:Contactable:Ownable:ContentMetaReference { name: "${name}" })-[:HAS_CONTACT]->(c:Contact { contactId: apoc.create.uuid() })
       SET b.businessId = apoc.create.uuid() 
       SET b.description = "${description}" 
       SET b.bannerColour = "${randomColor()}" 
       SET b.slug = "${slugify(name, {
         lower: true,
         remove: /[*+~.()'"!:@]/g,
       })}-${nanoid(8)}"
       SET b.dateCreated = toInteger(${Date.now()})
       SET c.email = "[]"
       SET c.telephone = "[]"
       RETURN b{ .*, managedBy: u{ .* }}`;
      return await runQuery(createBusiness, context, resolveInfo);
    },
  },
  Business: {
    dateCreated: (
      obj: any,
      _args: any,
      _context: any,
      _resolveInfo: GraphQLResolveInfo
    ) => {
      return Number(obj.dateCreated);
    },
  },
  Contact: {
    // email: (
    //   obj: any,
    //   _args: any,
    //   _context: any,
    //   _resolveInfo: GraphQLResolveInfo
    // ) => JSON.parse(obj.email),
    // telephone: (
    //   obj: any,
    //   _args: any,
    //   _context: any,
    //   _resolveInfo: GraphQLResolveInfo
    // ) => JSON.parse(obj.telephone),
  },
};

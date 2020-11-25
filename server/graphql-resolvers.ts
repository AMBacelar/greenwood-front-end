import _ from 'lodash';

import { randomColor } from 'utils/randomColour';
import { slugify } from 'utils/createSlug';
import { createAccessToken, createRefreshToken } from './auth';
import { sendRefreshToken } from './sendRefreshToken';
import { verify } from 'jsonwebtoken';
import { GraphQLResolveInfo } from 'graphql';

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

  result = await session.writeTransaction((tx: any) => tx.run(query));
  result = result.records[0].get(0);
  session.close();
  return built ? result.properties : result;
};

const authFunctions = {
  authenticate: async (
    _obj: any,
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
      user = await runQuery(createUser, context, resolveInfo, false);
    } finally {
      sendRefreshToken(context.res, createRefreshToken(user));
      return {
        accessToken: createAccessToken(user),
        ok: true,
        user,
      };
    }
  },
  refreshToken: async (
    _obj: any,
    _args: any,
    context: any,
    resolveInfo: GraphQLResolveInfo
  ) => {
    const token = context.req.cookies['grnwood-network-refresh'];
    if (!token) {
      return context.res.send({ ok: false, accessToken: '' });
    }

    let payload = null;
    try {
      payload = <any>verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      return context.res.send({ ok: false, accessToken: '' });
    }

    const findUser = `
    MATCH (user: User { userId: "${payload.userId}"})
    RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;

    let user;
    try {
      user = await runQuery(findUser, context, resolveInfo, false);
    } catch (error) {
      if (!user) {
        return context.res.send({ ok: false, accessToken: '' });
      }
      console.log(error);
    } finally {
      console.log('response:', user);
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
      _obj: any,
      _args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const token = context.req.cookies['sessionCookie'];
      if (!token) {
        return { ok: false, accessToken: '', user: {} };
      }
      const findUser = `
      MATCH (user: User { userId: "${context.req.session.passport.user.userId}"})
      RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user`;

      let user;
      try {
        user = await runQuery(findUser, context, resolveInfo, false);
      } catch (error) {
        if (!user) {
          return { ok: false, accessToken: '', user: {} };
        }
        console.log('testing stuff out', error);
      } finally {
        sendRefreshToken(context.res, createRefreshToken(user));
        return {
          accessToken: createAccessToken(user),
          user,
          ok: true,
        };
      }
    },
  },
  Mutation: {
    ...authFunctions,
    userCreateBusiness: async (
      _obj: any,
      args: any,
      context: any,
      resolveInfo: GraphQLResolveInfo
    ) => {
      const {
        userId,
        name,
        description,
        // displayImage,
        // gallery,
        // bannerImage,
      } = args.input;
      /**
       * first, create the business object
       * second, attack business to user object
       * third, connect auxilliary objects IF they exist
       */
      const createBusiness = `
       MATCH (u: User {userId: "${userId}"})
       MERGE (b: Business:Contactable:Ownable:ContentMetaReference { name: "${name}", businessId: apoc.create.uuid(), description: "${description}", bannerColour: "${randomColor()}", slug: "${slugify(
        name,
        {
          lower: true,
          remove: /[*+~.()'"!:@]/g,
        }
      )}", dateCreated: toInteger(${Date.now()}) })<-[r:MANAGES]-(u)
        RETURN b
       `;
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
};

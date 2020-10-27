import passport from 'passport';
import cookieSession from 'cookie-session';
import url from 'url';
import redirect from 'micro-redirect';
import { initializeNeo4j } from './neo4j';
export { default as passport } from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser(async (user, done) => {
  return done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.VERCEL_URL}/api/auth/google_callback`,
      accessType: 'offline',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    async (
      _req: any,
      _accessToken: String,
      _refreshToken: String,
      profile: any,
      cb: (error: any, user?: any) => void
    ) => {
      const variables = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value,
        fieldName: 'googleId',
      };
      const driver = initializeNeo4j();
      const session = driver.session();

      const findUser = `
        MATCH (user: User {googleId: "${variables.id}"})
        RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user
      `;
      const createUser = `
        CREATE (user:User:Contactable:ContentMetaReference { userId: apoc.create.uuid(), googleId: "${variables.id}", displayName: "${variables.displayName}" })-[:HAS_CONTACT]->(c:Contact { contactId: apoc.create.uuid(), email: ["${variables.email}"]})
        RETURN user { .userId, .displayName, contact: head([(user)-[:HAS_CONTACT]->(user_contact:Contact) | user_contact { .email }]) } AS user
      `;
      let result;
      let node;
      try {
        result = await session.run(findUser);
      } catch (error) {
        result = await session.run(createUser);
      } finally {
        const singleRecord = result.records[0];
        node = singleRecord.get(0);
        console.log(node);
        cb(null, node);
        session.close();
      }
    }
  )
);

export default (fn) => (req, res) => {
  if (!res.redirect) {
    // passport.js needs res.redirect:
    // https://github.com/jaredhanson/passport/blob/1c8ede/lib/middleware/authenticate.js#L261
    // Monkey-patch res.redirect to emulate express.js's res.redirect,
    // since it doesn't exist in micro. default redirect status is 302
    // as it is in express. https://expressjs.com/en/api.html#res.redirect
    res.redirect = (location: string) => redirect(res, 302, location);
  }

  // Initialize Passport and restore authentication state, if any, from the
  // session. This nesting of middleware handlers basically does what app.use(passport.initialize())
  // does in express.
  cookieSession({
    name: 'sessionCookie',
    signed: false,
    domain: url.parse(req.url).host || '',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })(req, res, () =>
    passport.initialize()(req, res, () =>
      passport.session()(req, res, () =>
        // call wrapped api route as innermost handler
        fn(req, res)
      )
    )
  );
};

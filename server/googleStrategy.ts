import passport from 'passport';
import cookieSession from 'cookie-session';
import redirect from 'micro-redirect';
import { initializeNeo4j } from './neo4j';
export { default as passport } from 'passport';
import Cors from 'cors';
import { Request, RequestHandler, Response } from 'express';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const allowedOrigins = JSON.parse(process.env.NEXT_PUBLIC_ALLOWED_ORIGINS!);

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
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
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
        cb(null, node);
        session.close();
      }
    }
  )
);

const initMiddleware = (middleware: RequestHandler) => (
  req: Request,
  res: Response
) =>
  new Promise((resolve, reject) => {
    middleware(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
const cors = initMiddleware(
  Cors({
    origin: (origin, callback) => {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) {
        callback(null, true);
        return;
      }
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        callback(new Error(msg), false);
        return;
      }
      callback(null, true);
      return;
    },
    credentials: true,
  })
);

const cSession = initMiddleware(
  cookieSession({
    name: 'sessionCookie',
    signed: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secret: process.env.COOKIE_SESSION_KEY!,
    secure: false,
  })
);

const passportInit = initMiddleware(passport.initialize());
const passportSession = initMiddleware(passport.session());

type MiddlewareResponse = Omit<Response, 'redirector'> & { redirector: any };

export default (fn: Function) => async (
  req: Request,
  res: MiddlewareResponse
) => {
  if (!res.redirector) {
    // passport.js needs res.redirect:
    // https://github.com/jaredhanson/passport/blob/1c8ede/lib/middleware/authenticate.js#L261
    // Monkey-patch res.redirect to emulate express.js's res.redirect,
    // since it doesn't exist in micro. default redirect status is 302
    // as it is in express. https://expressjs.com/en/api.html#res.redirect

    // nextJs indeed has its own res.redirect, but it is currently not behaving as one would expect.
    res.redirector = (location: string) => redirect(res, 302, location);
  }

  await cors(req, res);
  await cSession(req, res);
  await passportInit(req, res);
  await passportSession(req, res);

  fn(req, res);
};

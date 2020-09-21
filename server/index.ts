import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import express from 'express';
import passport from 'passport';
import cookieSession from 'cookie-session';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

(async () => {
  await app.prepare();

  const handle = app.getRequestHandler();

  const server = express();
  require('./googleStrategy');

  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  server.use(
    cookieSession({
      name: 'greenwood-network-test',
      maxAge: 24 * 60 * 60 * 1000,
      keys: [process.env.COOKIE_SESSION_KEY || 'abc123'],
    })
  );
  server.use(passport.initialize());

  server.get(
    '/auth/google',
    (req, _res, next) => {
      if (null === req.session) {
        req.session = {};
      }
      req.session.redirect = req.get('Referrer');
      next();
    },
    passport.authenticate('google', { scope: ['email', 'profile'] })
  );

  server.get(
    '/google_callback',
    passport.authenticate('google'),
    (req: any, res) => {
      if (null === req.session) {
        req.session = {};
      }

      fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
        mutation Authenticate(
          $fieldName: String!
          $id: String!
          $displayName: String!
        ) {
          authenticate(
            fieldName: $fieldName
            id: $id
            displayName: $displayName
          ) {
            accessToken
            user {
              displayName
              userId
            }
          }
        }
      `,
          variables: {
            fieldName: 'googleId',
            displayName: req.user.displayName,
            id: req.user.id,
          },
        }),
      })
        .then((r) => r.json())
        .then((data) => console.log('data returned:', data.data));

      // query for User where googleId === req.user.id
      // if found, return User
      // else create User with this googleid and populate display name
      // return User
      res.redirect(req.session.redirect || '/');
    }
  );

  server.get('*', (request, response) =>
    handle(request, response, parse(request.url || '', true))
  );

  createServer(server).listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})();

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
      if (!!req.session || null === req.session) {
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
      const destination = req.session.redirect || '/';
      req.session.redirect = null;
      res.redirect(destination);
    }
  );

  server.get('*', (request, response) =>
    handle(request, response, parse(request.url || '', true))
  );

  createServer(server).listen(port, () => {
    console.log(`listening on port ${port}`);
  });
})();

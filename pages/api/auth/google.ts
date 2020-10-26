// import nextConnect from 'next-connect';
import withPassport, { passport } from '../../../server/googleStrategy';
import { NextApiResponse, NextApiRequest } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  passport.authenticate('google', { scope: ['email', 'profile'] })(
    req,
    res,
    () => {}
  );
};

const storeRedirect = (fn) => (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.session || null === req.session) {
    req.session = {};
  }
  req.session.redirect = req.headers['referer'];
  fn(req, res);
};

export default withPassport(storeRedirect(handler));

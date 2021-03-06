import { NextApiResponse, NextApiRequest } from 'next';
import withPassport, { passport } from '../../../server/googleStrategy';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  passport.authenticate('google')(req, res, () => {
    const destination = req.session.redirect || '/';
    req.session.redirect = null;
    res.redirector(destination);
  });
  return;
};

export default withPassport(handler);

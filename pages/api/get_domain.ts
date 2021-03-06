import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) =>
  new Promise<void>((resolve) => {
    console.log(req.headers.referer);
    res.status(200).json({ host: req.headers.host });
    return resolve();
  });

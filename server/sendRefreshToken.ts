import { Response } from 'express';
import { serialize } from 'cookie';

export const sendRefreshToken = (res: Response, token: string) => {
  res.setHeader(
    'Set-Cookie',
    serialize('grnwood-network-refresh', token, {
      httpOnly: true,
      sameSite: 'none',
    })
  );
};

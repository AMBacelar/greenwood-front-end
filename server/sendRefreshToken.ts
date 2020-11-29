import { Response } from 'express';
import { serialize } from 'cookie';

export const sendRefreshToken = (res: Response, token: string) => {
  console.log(
    serialize('grnwood-network-refresh', token, {
      httpOnly: true,
      sameSite: 'strict',
    })
  );
  res.setHeader(
    'Set-Cookie',
    `grnwood-network-refresh=${token}; Path=/; HttpOnly;`
  );
};

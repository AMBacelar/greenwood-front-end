import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.setHeader(
    'Set-Cookie',
    `grnwood-network-refresh=${token}; Path=/; HttpOnly; Secure`
  );
};

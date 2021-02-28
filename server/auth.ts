const { sign, verify } = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

export const createAccessToken = ({ userId }: any): string => {
  return sign({ userId }, accessTokenSecret, { expiresIn: '15m' });
};

export const createRefreshToken = ({ userId }: any): string => {
  return sign({ userId }, refreshTokenSecret, { expiresIn: '7d' });
};

export const readRefreshToken = (token: string) => {
  let decoded;
  try {
    decoded = verify(token, refreshTokenSecret);
    console.log(decoded);
  } catch (error) {
    console.log(error);
  }
  return decoded;
};

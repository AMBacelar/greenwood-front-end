const { sign } = require('jsonwebtoken');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

export const createAccessToken = ({ userId }: any) => {
  return sign({ userId }, accessTokenSecret, { expiresIn: '15m' });
};

export const createRefreshToken = ({ userId }: any) => {
  return sign({ userId }, refreshTokenSecret, { expiresIn: '7d' });
};
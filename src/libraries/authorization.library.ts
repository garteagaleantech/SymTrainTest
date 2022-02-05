import jwt from 'jsonwebtoken';
import { config } from '@config/index';

const expiresIn = 86400;
export const authorize = (user: User): AuthLoginResponse => {
  const token = jwt.sign({ sub: user.id }, config.jwt.secret, {
    algorithm: 'HS256',
    expiresIn: expiresIn
  });

  return {
    token,
    expiresIn
  };
};

export const validateToken = (token: string): Authorization => {
  const auth = jwt.verify(token.replace('Bearer ', ''), config.jwt.secret, {
    algorithms: ['HS256']
  }) as Authorization;

  return auth;
};

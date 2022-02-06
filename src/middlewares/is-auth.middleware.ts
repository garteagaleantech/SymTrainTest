import { RequestHandler } from 'express';
import { validateToken } from '@libraries/authorization.library';
import { userErrors } from '@errors/user.error';

export const isAuthMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const auth = validateToken(authorization!);

    req.auth = auth;

    next();
  } catch (error) {
    throw userErrors.unAuthorized();
  }
};

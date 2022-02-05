import { RequestHandler } from 'express';
import { validateToken } from '@libraries/authorization.library';
import { userErrors } from '@errors/user.error';

export const isAuthMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const auth = validateToken(authorization!);
    if (!auth) {
      throw userErrors.unAuthorized();
    }

    req.body.user = auth;

    next();
  } catch (error) {
    next(error);
  }
};

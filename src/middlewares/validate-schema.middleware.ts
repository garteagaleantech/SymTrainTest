import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Schema } from 'joi';

export const validateSchemaMiddleware = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const error = schema.validate(body);

    if (error) {
      return next(error);
    }

    return next();
  };
};

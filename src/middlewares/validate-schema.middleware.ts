import { HttpStatusCodes } from '@constants/http-status-codes.constant';
import { CustomError } from '@libraries/custom-error.library';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Schema } from 'joi';

export const validateSchemaMiddleware = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const error = schema.validate(body);

    if (error.error) {
      const errorMessages = error.error?.details.map(
        (detail) => detail.message
      );

      throw new CustomError(
        errorMessages?.join(',') ?? '',
        HttpStatusCodes.badRequest
      );
    }

    return next();
  };
};

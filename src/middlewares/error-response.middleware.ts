import { HttpStatusCodes } from '@constants/http-status-codes.constant';
import { CustomError } from '@libraries/custom-error.library';
import { ErrorRequestHandler } from 'express';

export const errorResponseMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  console.error(error);

  if (error instanceof CustomError) {
    res
      .status(error.status ?? HttpStatusCodes.internalServerError)
      .send(error.getError());

    return;
  }

  res
    .status(HttpStatusCodes.internalServerError)
    .send({ message: error.message });
};

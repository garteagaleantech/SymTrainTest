import { CustomError } from '@libraries/index';
import { HttpStatusCodes } from '../constants';

export const userErrors: Record<string, () => CustomError> = {
  userNotFound: () =>
    new CustomError('The user does not exist', HttpStatusCodes.notFound),
  wrongCredentials: (): CustomError =>
    new CustomError('Wrong credentials', HttpStatusCodes.badRequest),
  unAuthorized: (): CustomError =>
    new CustomError('Your session has expire', HttpStatusCodes.unauthorized)
};

import { CustomError } from '@libraries/index';
import { HttpStatusCodes } from '../constants';

export const recipeErrors: Record<string, () => CustomError> = {
  recipeNotFound: () =>
    new CustomError('The recipe does not exist', HttpStatusCodes.notFound)
};

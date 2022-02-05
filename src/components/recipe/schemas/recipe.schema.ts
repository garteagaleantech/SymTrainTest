import Joi from 'joi';

export const recipeSchema = Joi.object({
  title: Joi.string().trim().required(),
  image: Joi.string().trim().required(),
  description: Joi.string().trim().required()
});

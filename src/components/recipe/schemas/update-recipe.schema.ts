import Joi from 'joi';

export const updateRecipeSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().trim().required(),
  image: Joi.string().trim().required(),
  description: Joi.string().trim().required()
});

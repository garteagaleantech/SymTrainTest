import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});

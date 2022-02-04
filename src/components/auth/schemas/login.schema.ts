import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required()
});

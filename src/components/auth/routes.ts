import { Router } from 'express';
import { validateSchemaMiddleware } from '@middlewares/index';
import { loginSchema, signUpSchema } from './schemas';
import { AuthController } from './controller/auth.controller';

const authRouter = Router();

const authController = new AuthController();

authRouter.post(
  '/signup',
  validateSchemaMiddleware(signUpSchema),
  authController.create
);

authRouter.post(
  '/login',
  validateSchemaMiddleware(loginSchema),
  authController.login
);

export default authRouter;

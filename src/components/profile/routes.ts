import { Router } from 'express';
import { isAuthMiddleware } from '@middlewares/index';
import { ProfileController } from './controller/profile.controller';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get('/me', isAuthMiddleware, profileController.me);

export default profileRouter;

import { Router } from 'express';
import authRouter from './auth/routes';
import profileRouter from './profile/routes';
import recipeRouter from './recipe/router';

const router = Router();

router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/recipe', recipeRouter);

export default router;

import { Router } from 'express';
import { isAuthMiddleware, validateSchemaMiddleware } from '@middlewares/index';
import { RecipeController } from './controller/recipe.controller';
import { recipeSchema } from './schemas/recipe.schema';

const recipeRouter = Router();
const recipeController = new RecipeController();

recipeRouter.post(
  '/',
  isAuthMiddleware,
  validateSchemaMiddleware(recipeSchema),
  recipeController.create
);

export default recipeRouter;

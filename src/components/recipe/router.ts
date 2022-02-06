import { Router } from 'express';
import { isAuthMiddleware, validateSchemaMiddleware } from '@middlewares/index';
import { RecipeController } from './controller/recipe.controller';
import { createRecipeSchema } from './schemas/create-recipe.schema';
import { updateRecipeSchema } from './schemas/update-recipe.schema';

const recipeRouter = Router();
const recipeController = new RecipeController();

recipeRouter.post(
  '/',
  isAuthMiddleware,
  validateSchemaMiddleware(createRecipeSchema),
  recipeController.create
);

recipeRouter.put(
  '/',
  isAuthMiddleware,
  validateSchemaMiddleware(updateRecipeSchema),
  recipeController.update
);

recipeRouter.get('/', isAuthMiddleware, recipeController.getAll);

recipeRouter.get('/:id', isAuthMiddleware, recipeController.getOne);

recipeRouter.delete('/:id', isAuthMiddleware, recipeController.delete);

export default recipeRouter;

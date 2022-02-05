import { HttpStatusCodes } from '@constants/http-status-codes.constant';
import { RequestHandler } from 'express';
import { RecipeService } from '../services/recipe.service';

export class RecipeController {
  private readonly recipeService: RecipeService;

  constructor() {
    this.recipeService = new RecipeService();
  }

  create: RequestHandler = async (req, res, next) => {
    try {
      const { body, auth } = req;

      const recipe = await this.recipeService.save({
        ...body,
        userId: auth!.sub
      });

      res.status(HttpStatusCodes.ok).send(recipe);
    } catch (error) {
      next(error);
    }
  };
}

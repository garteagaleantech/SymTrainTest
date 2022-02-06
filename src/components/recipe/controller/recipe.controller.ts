import { HttpStatusCodes } from '@constants/http-status-codes.constant';
import { paginationConstant } from '@constants/pagination.constant';
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

  update: RequestHandler = async (req, res, next) => {
    try {
      const { body, auth } = req;

      const recipe = await this.recipeService.update({
        ...body,
        userId: auth!.sub
      });

      res.status(HttpStatusCodes.ok).send(recipe);
    } catch (error) {
      next(error);
    }
  };

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const { search, limit, page, sortBy, orderBy } = req.query;

      const paginatedRecipes = await this.recipeService.get({
        search: search ? (search as string) : paginationConstant.search,
        limit: limit ? parseInt(limit as string) : paginationConstant.limit,
        page: page ? parseInt(page as string) : paginationConstant.page,
        sortBy: sortBy ? (sortBy as string) : paginationConstant.sortBy,
        orderBy: orderBy ? (orderBy as string) : paginationConstant.orderBy
      });

      res.status(HttpStatusCodes.ok).send(paginatedRecipes);
    } catch (error) {
      next(error);
    }
  };

  getOne: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      const recipe = await this.recipeService.getById(parseInt(id));

      res.status(HttpStatusCodes.ok).send(recipe ?? {});
    } catch (error) {
      next(error);
    }
  };

  delete: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params;

      await this.recipeService.delete(parseInt(id));

      res.status(HttpStatusCodes.ok).end();
    } catch (error) {
      next(error);
    }
  };
}

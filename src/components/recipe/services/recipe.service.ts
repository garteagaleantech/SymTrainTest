import { recipeErrors } from '@errors/recipe.error';
import { RecipeDao } from '../dao/recipe.dao';

export class RecipeService {
  private readonly recipeDao: RecipeDao;

  constructor() {
    this.recipeDao = new RecipeDao();
  }

  async save(recipe: Recipe): Promise<Recipe> {
    const newRecipe = await this.recipeDao.save(recipe);

    return newRecipe;
  }

  async update(recipe: Recipe): Promise<Recipe> {
    const newRecipe = await this.recipeDao.update(recipe);

    return newRecipe;
  }

  async get(
    query: PaginatedRequest
  ): Promise<PaginatedResponse<Array<RecipeResponse>>> {
    const paginatedRecipes = await this.recipeDao.get(query);

    return paginatedRecipes;
  }

  async getById(id: number): Promise<RecipeResponse | null> {
    const recipe = await this.recipeDao.getById(id);

    return recipe;
  }

  async delete(id: number): Promise<void> {
    await this.recipeDao.delete(id);
  }
}

import { RecipeDao } from '../dao/recipe.dao';

export class RecipeService {
  private readonly recipeDao: RecipeDao;

  constructor() {
    this.recipeDao = new RecipeDao();
  }

  async save(recipe: UpdateRecipe): Promise<Recipe> {
    const newRecipe = await this.recipeDao.save(recipe);

    return newRecipe;
  }
}

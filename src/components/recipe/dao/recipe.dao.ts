import { recipeErrors } from '@errors/recipe.error';
import { RecipeModel } from '@models/index';

export class RecipeDao {
  async save(recipe: CreateRecipe): Promise<Recipe> {
    const newRecipe = new RecipeModel(recipe as Recipe);
    await newRecipe.save();

    return newRecipe.get();
  }

  async update(recipe: UpdateRecipe): Promise<Recipe> {
    const oldRecipe = await RecipeModel.findByPk(recipe.id);

    if (!oldRecipe) {
      throw recipeErrors.recipeNotFound();
    }

    await oldRecipe.update(recipe);

    return oldRecipe.get();
  }
}

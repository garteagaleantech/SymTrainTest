/* eslint-disable @typescript-eslint/naming-convention */
import { recipeErrors } from '@errors/recipe.error';
import { RecipeModel, UserModel } from '@models/index';
import { Op } from 'sequelize';

export class RecipeDao {
  async save(recipe: CreateRecipe): Promise<Recipe> {
    const newRecipe = new RecipeModel(recipe as Recipe);
    await newRecipe.save();

    return newRecipe.get();
  }

  async update(recipe: Recipe): Promise<Recipe> {
    const oldRecipe = await RecipeModel.findByPk(recipe.id);

    if (!oldRecipe) {
      throw recipeErrors.recipeNotFound();
    }

    await oldRecipe.update(recipe);

    return oldRecipe.get();
  }

  async get(
    query: PaginatedRequest
  ): Promise<PaginatedResponse<Array<Recipe>>> {
    const { page, search, limit, orderBy, sortBy } = query;
    const { count, rows: recipeModels } = await RecipeModel.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
      where: {
        title: { [Op.like]: `%${search}%` }
      },
      order: [[sortBy, orderBy]],
      include: UserModel
    });

    const recipes = recipeModels.map<RecipeResponse>((recipeModel) => {
      const { id, title, description, image, userId, User } = recipeModel.get();
      const user = User ? (User as UserModel).get() : undefined;

      return {
        id,
        title,
        image,
        description,
        userId,
        user: user
          ? {
              id: user.id,
              name: user.name,
              email: user.email
            }
          : undefined
      };
    });

    return {
      data: recipes,
      limit,
      orderBy,
      sortBy,
      page,
      pages: Math.ceil(count / limit),
      total: count
    };
  }

  async getById(id: number): Promise<RecipeResponse | null> {
    const recipeModel = await RecipeModel.findByPk(id, {
      include: UserModel
    });

    if (!recipeModel) return null;

    const {
      id: recipeId,
      title,
      description,
      image,
      userId,
      User
    } = recipeModel.get();
    const user = User ? (User as UserModel).get() : undefined;

    return {
      id: recipeId,
      title,
      description,
      image,
      userId,
      user: user
        ? {
            id: user.id,
            name: user.name,
            email: user.email
          }
        : undefined
    };
  }
}

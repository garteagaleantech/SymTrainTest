/* eslint-disable @typescript-eslint/naming-convention */
type RecipeExtended = {
  id: number;
  userId: string;
  title: string;
  image: string;
  description: string;
  user?: UserResponse;
  User?: unknown;
};

type RecipeResponse = Omit<RecipeExtended, 'User'>;

type Recipe = Omit<RecipeExtended, 'User' | 'user'>;

type CreateRecipe = Omit<Recipe, 'id'>;

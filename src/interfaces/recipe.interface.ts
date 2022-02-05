type Recipe = {
  id: number;
  userId: string;
  title: string;
  image: string;
  description: string;
};

type CreateRecipe = Omit<Recipe, 'id'>;

type UpdateRecipe = Recipe;

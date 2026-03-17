import { Recipe } from './types';

export class CardModel {
  constructor(private recipe: Recipe) {}
  getRecipe(): Recipe {
    return this.recipe;
  }
  getTitle(): string {
    return this.recipe.title;
  }
  getCookTime(): string {
    return `${this.recipe.cookTime}`;
  }
  getCalories(): string {
    return `${this.recipe.calories}`;
  }
  getRecipeImage(): string {
    return this.recipe.image;
  }
  getRecipeTitle(): string {
    return this.recipe.title;
  }
  getRecipeCategory(): string {
    return this.recipe.category;
  }
  getRecipePrepTime(): string {
    return `${this.recipe.prepTime}`;
  }
  getRecipeServings(): string {
    return `${this.recipe.servings}`;
  }
  getRecipeCuisine(): string {
    return this.recipe.cuisine;
  }
  getRecipeTags(): string[] {
    return this.recipe.tags;
  }
  getRecipeIngredients(): { name: string; amount: string; category: string }[] {
    return this.recipe.ingredients;
  }
  getRecipeSteps(): string[] {
    return this.recipe.steps;
  }
  getRecipeNutrition(): { protein: number; carbs: number; fat: number; fiber: number } {
    return this.recipe.nutrition;
  }
  getRecipeFavorite(): boolean {
    return this.recipe.favorite;
  }
  setRecipe(recipe: Recipe): void {
    this.recipe = recipe;
  }
  setRecipeFavorite(favorite: boolean): void {
    this.recipe.favorite = favorite;
  }
}

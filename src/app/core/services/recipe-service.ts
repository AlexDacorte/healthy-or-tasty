import { Injectable, signal } from '@angular/core';
import { recipes } from '../data/local/recipes';
import { IRecipeService, Recipe } from '../data/local/types';
import { CardModel } from './../data/local/model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements IRecipeService {
  private recipeData = signal<Recipe[]>(recipes);
  private cardModels: CardModel[];
  recipeActiveData = signal<CardModel[]>([]);
  constructor() {
    this.cardModels = this.recipeData().map((recipe) => new CardModel(recipe));

    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().category === 'healthy'),
    );
  }

  private loadRecipesFromStorage(): CardModel[] {
    const localData = localStorage.getItem('cardModels');

    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        return parsed.map((recipe: Recipe) => new CardModel(recipe));
      } catch (error) {
        console.warn('Error parsing local storage data');
        return [];
      }
    }
    console.warn('No local storage data found');
    return [];
  }
  onFilteredByCategory(category: 'healthy' | 'tasty') {
    const filterContent = this.cardModels.filter(
      (cardModel) => cardModel.getRecipe().category === category,
    );
    this.recipeActiveData.set(filterContent);
  }

  onFilterByCuisine(cuisine: string) {
    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().cuisine === cuisine),
    );
  }

  onFilterByTag(tag: string) {
    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().tags.includes(tag)),
    );
  }

  onFilterByCookTime(cookTime: number) {
    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().cookTime < cookTime),
    );
  }

  onFilterByCalories(calories: number) {
    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().calories < calories),
    );
  }

  onFilterByFavorite(favorite: boolean) {
    this.recipeActiveData.set(
      this.cardModels.filter((cardModel) => cardModel.getRecipe().favorite === favorite),
    );
  }

  saveToLocalStorage(cardModels: CardModel[]) {
    localStorage.setItem('cardModels', JSON.stringify(cardModels));
    this.recipeActiveData.set(cardModels);
  }

  getCardModel(): CardModel[] {
    return this.cardModels;
  }
  onRecipeChange(): void {
    const currentRecipe = this.recipeActiveData().shift()!;
    const nonFilteredData = this.recipeActiveData().filter(
      (cardModel) => cardModel.getRecipe().id !== currentRecipe.getRecipe().id,
    );
    this.saveToLocalStorage(nonFilteredData);
  }
}

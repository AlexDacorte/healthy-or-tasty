import { CardModel } from './../data/local/model';
import { Injectable, signal, computed } from '@angular/core';
import { Recipe } from '../data/local/types';
import { recipes } from '../data/local/recipes';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TitlePageType } from '../data/local/types';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeData = signal<Recipe[]>(recipes);
  filteredRecipeData = signal<Recipe[]>([]);
  favorites = signal<Recipe[]>([]);
  title = signal<TitlePageType>('Foodie');
  cardModels: CardModel[];
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.selectTitle(event.url);
      });
    this.getFilteredRecipes('healthy');
    this.cardModels = this.recipeData().map((recipe) => new CardModel(recipe));
  }

  selectTitle(url: string) {
    switch (url) {
      case '/':
        this.title.set('Foodie');
        console.log(url);
        break;
      case '/plan':
        this.title.set('Plan');
        console.log(url);
        break;
      case '/favorites':
        this.title.set('Favorites');
        console.log(url);
        break;
      case '/search':
        this.title.set('Search Recipes');
        console.log(url);
        break;
      case '/shopping-list':
        this.title.set('Shopping List');
        console.log(url);
        break;
    }
  }
  getFilteredRecipes(category: 'healthy' | 'tasty') {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.category === category));
  }

  onFilterByCuisine(cuisine: string) {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.cuisine === cuisine));
  }

  onFilterByTag(tag: string) {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.tags.includes(tag)));
  }

  onFilterByCookTime(cookTime: number) {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.cookTime < cookTime));
  }

  onFilterByCalories(calories: number) {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.calories < calories));
  }

  saveToLocalStorage(recipes: Recipe[]) {
    localStorage.setItem('recipe', JSON.stringify(recipes));
  }

  getCardModel(): CardModel[] {
    return this.cardModels;
  }
  onRecipeChange(): Recipe {
    const currentRecipe = this.filteredRecipeData().shift()!;
    const nonFilteredData = this.recipeData().filter((recipe) => recipe.id !== currentRecipe.id);
    this.saveToLocalStorage(nonFilteredData);
    return currentRecipe;
  }

  onFavoriteChange(recipe: Recipe) {
    this.favorites.set([...this.favorites(), recipe]);
    this.saveToLocalStorage(this.favorites());
  }
}

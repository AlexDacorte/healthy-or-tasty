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
  recipes = computed(() => this.recipeData());
  favorites = signal<Recipe[]>([]);
  title = signal<TitlePageType>('Foodie');
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.selectTitle(event.url);
      });
    this.getFilteredRecipes('healthy');
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
      case '/shop-list':
        this.title.set('Shopping List');
        console.log(url);
        break;
    }
  }
  getFilteredRecipes(category: 'healthy' | 'tasty') {
    this.filteredRecipeData.set(this.recipeData().filter((recipe) => recipe.category === category));
  }

  saveToLocalStorage(recipes: Recipe[]) {
    localStorage.setItem('recipe', JSON.stringify(recipes));
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

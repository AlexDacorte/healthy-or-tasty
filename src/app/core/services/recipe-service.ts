import { Injectable, signal, computed } from '@angular/core';
import { Recipe } from '../data/local/types';
import { recipes } from '../data/local/recipes';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TitlePage } from '../data/local/types';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeData = signal<Recipe[]>(recipes);
  filteredRecipeData = signal<Recipe[]>([]);
  recipes = computed(() => this.recipeData());
  title = signal<TitlePage>('Foodie');
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
        break;
      case '/plan':
        this.title.set('Plan');
        break;
      case '/favorites':
        this.title.set('Favorites');
        break;
      case '/search':
        this.title.set('Search Recipes');
        break;
      case '/shop-list':
        this.title.set('Shopping List');
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
}

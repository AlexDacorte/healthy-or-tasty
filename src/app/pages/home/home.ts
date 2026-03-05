import { Recipe } from '@/app/core/data/local/types';
import { RecipeCardComponent } from '@/app/shared/components/recipe-card/recipe-card';
import { Component, signal, inject, OnInit } from '@angular/core';
import { RecipeService } from '@/app/core/services/recipe-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  recipeData = signal<Recipe>({} as Recipe);

  ngOnInit(): void {
    this.recipeData.set(this.recipeService.onRecipeChange());
  }
  private recipeService = inject(RecipeService);

  isHealthySelected: boolean = true;
  isTastySelected: boolean = false;

  getFilteredRecipes(category: 'healthy' | 'tasty') {
    if (category === 'healthy') {
      this.isHealthySelected = true;
      this.isTastySelected = false;
    } else {
      this.isHealthySelected = false;
      this.isTastySelected = true;
    }
    if (this.isHealthySelected && category === 'healthy') {
      return;
    } else if (this.isTastySelected && category === 'tasty') {
      return;
    }
    this.recipeService.getFilteredRecipes(category);
  }

  onFavoriteChange(recipe: Recipe) {
    this.recipeService.onFavoriteChange(recipe);
  }
}

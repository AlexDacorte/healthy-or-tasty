import { Component, inject } from '@angular/core';
import { RecipeService } from '@/app/core/services/recipe-service';
import { RecipeCardComponent } from '@/app/shared/components/recipe-card/recipe-card';

@Component({
  selector: 'app-favorites',
  imports: [RecipeCardComponent],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private recipeService = inject(RecipeService);
  favorites = this.recipeService.favorites;
}

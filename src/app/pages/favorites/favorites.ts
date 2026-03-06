import { Component, inject } from '@angular/core';
import { RecipeService } from '@/app/core/services/recipe-service';
import { GalleryCard } from '@/app/shared/components/gallery-card/gallery-card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-favorites',
  imports: [GalleryCard, MatGridListModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private recipeService = inject(RecipeService);
  cardModels = this.recipeService.getCardModel();
  favorites = this.recipeService.cardModels.filter(
    (cardModel) => cardModel.getRecipeFavorite() === true,
  );
}

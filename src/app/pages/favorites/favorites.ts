import { Component, inject } from '@angular/core';
import { RecipeService } from '@/app/core/services/recipe-service';
import { GalleryCard } from "@/app/shared/components/gallery-card/gallery-card";

@Component({
  selector: 'app-favorites',
  imports: [GalleryCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites {
  private recipeService = inject(RecipeService);
  favorites = this.recipeService.favorites;
}

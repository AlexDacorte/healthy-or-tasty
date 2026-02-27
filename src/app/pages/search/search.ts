import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GalleryCard } from '@shared/components/gallery-card/gallery-card';
import { RecipeService } from '@core/services/recipe-service';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    GalleryCard,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private recipeService = inject(RecipeService);
  searchQuery = '';
  recipes = signal(this.recipeService.recipes());
}

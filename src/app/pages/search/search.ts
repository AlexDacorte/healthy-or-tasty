import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GalleryCard } from '@shared/components/gallery-card/gallery-card';
import { RecipeService } from '@core/services/recipe-service';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CustomInput } from '@shared/components/custom-input/custom-input';
@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    GalleryCard,
    MatGridList,
    MatGridTile,
    CustomInput,
  ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private recipeService = inject(RecipeService);
  searchQuery = '';
  recipes = signal(this.recipeService.recipes());
  tags = signal(this.recipeService.recipes().map((recipe) => recipe.tags));
  uniqueTags = signal(this.tags().flat().filter((tag, index, self) => self.indexOf(tag) === index));
  cousines = signal(this.recipeService.recipes().map((recipe) => recipe.cuisine));
  uniqueCousines = signal(this.cousines().filter((cuisine, index, self) => self.indexOf(cuisine) === index));
}

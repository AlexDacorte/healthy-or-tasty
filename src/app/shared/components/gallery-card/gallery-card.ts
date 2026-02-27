import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Recipe } from '@core/data/local/types';

@Component({
  selector: 'app-gallery-card',
  imports: [MatCardModule, MatIconModule, MatListModule],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.css',
})
export class GalleryCard {
  recipeData = input<Recipe>();
}

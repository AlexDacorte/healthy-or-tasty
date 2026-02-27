import { Recipe } from '@core/data/local/types';
import { Component, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatList, MatListItem } from '@angular/material/list';
type categories = 'healthy' | 'tasty';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  styleUrls: ['./recipe-card.css'],
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule, MatListModule],
})
export class RecipeCardComponent {
  recipeData = input<Recipe>();
  selectedCategory = signal<categories>('healthy');
}

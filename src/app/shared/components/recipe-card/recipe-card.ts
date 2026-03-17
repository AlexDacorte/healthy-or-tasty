import { RecipeService } from '@/app/core/services/recipe-service';
import { Component, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
type categories = 'healthy' | 'tasty';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  styleUrls: ['./recipe-card.css'],
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatIconModule, MatListModule],
})
export class RecipeCardComponent {
  constructor(private recipeService: RecipeService) {
    console.log(this.cardModel());
  }
  cardModel = computed(() => this.recipeService.recipeActiveData()[0]);
}

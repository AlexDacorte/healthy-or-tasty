import { CardModel } from '@/app/core/data/local/model';
import { RecipeService } from '@/app/core/services/recipe-service';
import { RecipeCardComponent } from '@/app/shared/components/recipe-card/recipe-card';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  cardModels = signal<CardModel[]>([]);

  firstCard = computed(() => this.cardModels()[0]);
  constructor(private recipeService: RecipeService) {
    this.cardModels.set(this.recipeService.recipeActiveData());
  }

  isHealthySelected = true;
  isTastySelected = false;

  getFilteredRecipes(category: 'healthy' | 'tasty') {
    this.recipeService.onFilteredByCategory(category);
  }

  onAddFavorite(cardModel: CardModel) {
    cardModel.setRecipeFavorite(true);
    this.recipeService.onRecipeChange();
  }
  onRemoveFavorite(cardModel: CardModel) {
    cardModel.setRecipeFavorite(false);
    this.recipeService.onRecipeChange();
  }
}

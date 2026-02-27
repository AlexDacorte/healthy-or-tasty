import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TitlePage } from '@/app/core/data/local/types';
import { RecipeService } from '@/app/core/services/recipe-service';
import { IconSelectorPipe } from '@/app/shared/pipes/icon-selector-pipe';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, IconSelectorPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private recipeService: RecipeService) {}
  currentTitle = computed(() => this.recipeService.title());
}

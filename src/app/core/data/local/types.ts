import { CardModel } from "./model";

export type Recipe = {
  id: string;
  title: string;
  category: 'healthy' | 'tasty';
  favorite: boolean;
  image: string;
  prepTime: number;
  cookTime: number;
  calories: number;
  servings: number;
  cuisine: string;
  tags: string[];
  ingredients: { name: string; amount: string; category: string }[];
  steps: string[];
  nutrition: { protein: number; carbs: number; fat: number; fiber: number };
};

export type TitlePageType = 'Foodie' | 'Search Recipes' | 'Favorites' | 'Plan' | 'Shopping List';

export type HeaderIcon = 'restaurant' | 'calendar_today' | 'favorite' | 'shopping_cart' | 'search';

type PlanDayType =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type PlanByDayType = {
  day: PlanDayType;
  recipes: Recipe[];
};


export interface IRecipeService {
  onFilteredByCategory(category: 'healthy' | 'tasty'): void;
  onFilterByCuisine(cuisine: string): void;
  onFilterByTag(tag: string): void;
  onFilterByCookTime(cookTime: number): void;
  onFilterByCalories(calories: number): void;
  saveToLocalStorage(cardModels: CardModel[]): void;
  getCardModel(): CardModel[];
  onRecipeChange(): void;
}

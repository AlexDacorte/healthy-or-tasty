export type Recipe = {
  id: string;
  title: string;
  category: 'healthy' | 'tasty';
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

export type TitlePage = 'Foodie' | 'Search Recipes' | 'Favorites' | 'Plan' | 'Shopping List';

export type HeaderIcon = 'restaurant' | 'calendar_today' | 'favorite' | 'shopping_cart' | 'search';
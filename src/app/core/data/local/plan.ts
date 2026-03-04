import { PlanByDayType } from './types';

export const planByDayData: PlanByDayType[] = [
  {
    day: 'monday',
    recipes: [
      {
        id: 'h1',
        title: 'Quinoa Buddha Bowl',
        category: 'healthy',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
        prepTime: 15,
        cookTime: 20,
        calories: 420,
        servings: 2,
        cuisine: 'Mediterranean',
        tags: ['vegan', 'gluten-free', 'high-protein'],
        ingredients: [
          { name: 'Quinoa', amount: '1 cup', category: 'grains' },
          { name: 'Chickpeas', amount: '1 can', category: 'protein' },
          { name: 'Avocado', amount: '1', category: 'produce' },
          { name: 'Cherry tomatoes', amount: '1 cup', category: 'produce' },
          { name: 'Cucumber', amount: '1', category: 'produce' },
          { name: 'Tahini', amount: '2 tbsp', category: 'condiments' },
          { name: 'Lemon', amount: '1', category: 'produce' },
        ],
        steps: [
          'Cook quinoa according to package directions.',
          'Drain and rinse chickpeas, roast at 400°F for 20 min.',
          'Dice avocado, halve tomatoes, slice cucumber.',
          'Assemble bowls with quinoa base, top with veggies and chickpeas.',
          'Drizzle with tahini and lemon juice.',
        ],
        nutrition: { protein: 18, carbs: 52, fat: 16, fiber: 12 },
      },
    ],
  },
  {
    day: 'tuesday',
    recipes: [],
  },
  {
    day: 'wednesday',
    recipes: [],
  },
  {
    day: 'thursday',
    recipes: [],
  },
  {
    day: 'friday',
    recipes: [],
  },
  {
    day: 'saturday',
    recipes: [],
  },
  {
    day: 'sunday',
    recipes: [],
  },
];

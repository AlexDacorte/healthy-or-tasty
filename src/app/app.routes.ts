export const routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: { viewName: 'Foodie' },
  },
  {
    path: 'plan',
    loadComponent: () => import('./pages/plan/plan').then((m) => m.Plan),
    data: { viewName: 'Plan' },
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites').then((m) => m.Favorites),
    data: { viewName: 'Favorites' },
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search').then((m) => m.Search),
    data: { viewName: 'Search Recipes' },
  },
  {
    path: 'shop-list',
    loadComponent: () => import('./pages/shopping-list/shopping-list').then((m) => m.ShoppingList),
    data: { viewName: 'Shopping List' },
  },
];

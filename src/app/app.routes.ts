import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'plan',
    loadComponent: () => import('./pages/plan/plan').then((m) => m.Plan),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites').then((m) => m.Favorites),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search').then((m) => m.Search),
  },
  {
    path: 'shop-list',
    loadComponent: () => import('./pages/shop-list/shop-list').then((m) => m.ShopList),
  },
];

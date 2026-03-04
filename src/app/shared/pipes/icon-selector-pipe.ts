import { Pipe, PipeTransform } from '@angular/core';
import { HeaderIcon, TitlePageType } from '../../core/data/local/types';

@Pipe({
  name: 'iconSelector',
})
export class IconSelectorPipe implements PipeTransform {
  transform(value: TitlePageType): HeaderIcon {
    const iconMap: Record<TitlePageType, HeaderIcon> = {
      Foodie: 'restaurant',
      Plan: 'calendar_today',
      Favorites: 'favorite',
      'Search Recipes': 'search',
      'Shopping List': 'shopping_cart',
    };
    return iconMap[value];
  }
}

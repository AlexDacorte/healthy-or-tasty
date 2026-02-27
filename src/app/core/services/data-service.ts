import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  httpClient = inject(HttpClient);

  getDataByCategory(category: string) {
    this.httpClient
      .get<[]>(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .pipe()
      .subscribe((res) => {
        console.log('!');
      });
  }
}

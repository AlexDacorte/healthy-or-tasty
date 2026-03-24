import { TitlePageType } from '@/app/core/data/local/types';
import { IconSelectorPipe } from '@/app/shared/pipes/icon-selector-pipe';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, IconSelectorPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);

  currentTitle = signal<TitlePageType>('Foodie');
  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
       return this.route.root
      }),
      map((root) => {

        while (root.firstChild) {
          root = root.firstChild;
        }
        return root }),
      mergeMap((root) => root.data )
    ).subscribe((data:any) =>{
      if(data['viewName']){
        this.currentTitle.set(data['viewName'])
        console.log(data)
      }
    })
  }
}

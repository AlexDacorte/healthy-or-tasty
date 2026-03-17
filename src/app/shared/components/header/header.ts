import { TitlePageType } from '@/app/core/data/local/types';
import { IconSelectorPipe } from '@/app/shared/pipes/icon-selector-pipe';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, IconSelectorPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  route = inject(ActivatedRoute);
  currentTitle = signal<TitlePageType>('Foodie');
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.currentTitle.set(data['viewName']);
    });
  }
}

import { Component, inject, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconSelectorPipe } from '@/app/shared/pipes/icon-selector-pipe';
import { TitleService } from '@/app/core/services/title-service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, IconSelectorPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titleService = inject(TitleService);
  currentTitle = this.titleService.currentTitle;
}

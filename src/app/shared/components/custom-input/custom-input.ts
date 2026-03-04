import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-custom-input',
  imports: [MatIcon],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput {
  placeholder = input<string>('search');
  icon = input<string | null>(null);
}

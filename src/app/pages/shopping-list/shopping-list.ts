import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomInput } from '@/app/shared/components/custom-input/custom-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-shopping-list',
  imports: [CustomInput, MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList { }

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomInput } from '@/app/shared/components/custom-input/custom-input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-shop-list',
  imports: [CustomInput, MatCardModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './shop-list.html',
  styleUrl: './shop-list.css',
})
export class ShopList {}

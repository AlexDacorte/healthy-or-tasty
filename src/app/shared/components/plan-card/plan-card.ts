import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlanByDayType } from '@core/data/local/types';
@Component({
  selector: 'app-plan-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.css',
})
export class PlanCard {
  planByDay = input<PlanByDayType>();
}

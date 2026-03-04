import { planByDayData } from '@/app/core/data/local/plan';
import { PlanByDayType } from '@/app/core/data/local/types';
import { Component, signal } from '@angular/core';
import { PlanCard } from '@shared/components/plan-card/plan-card';
@Component({
  selector: 'app-plan',
  imports: [PlanCard],
  templateUrl: './plan.html',
  styleUrl: './plan.css',
})
export class Plan {
  planByDay = signal<PlanByDayType[]>(planByDayData);
}

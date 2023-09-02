import { Component, OnInit, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ng-do-check-cycle',
  templateUrl: './ng-do-check-cycle.component.html',
  styleUrls: ['./ng-do-check-cycle.component.css'],
})
export class NgDoCheckCycleComponent {
  rates: { inr: number } = { inr: 0 };

  updateRates() {
    this.rates.inr = 75;
  }
}

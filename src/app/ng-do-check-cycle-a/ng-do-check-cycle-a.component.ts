import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ng-do-check-cycle-a',
  templateUrl: './ng-do-check-cycle-a.component.html',
  styleUrls: ['./ng-do-check-cycle-a.component.css'],
})
export class NgDoCheckCycleAComponent implements DoCheck {
  @Input() rates: { inr: number } = { inr: 0 };
  diff = undefined;
  oldRate = 0;

  ngDoCheck() {
    if (this.rates.inr !== this.oldRate) {
      this.diff = this.rates.inr - this.oldRate;
      this.oldRate = this.rates.inr;
    }
  }
}

//below example shows, when ngOnChanges is used, the change made inside the object is not detected
// export class NgDoCheckCycleAComponent implements OnChanges {
//   @Input() rates: { inr: number } = { inr: 0 };
//   diff = undefined;

//   ngOnChanges(changes: SimpleChanges) {
//     console.log('Is first change?', changes.rates.firstChange);
//   }
// }

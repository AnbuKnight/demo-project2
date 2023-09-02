import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-child',
  template: `
    <a (click)="changeFromChild()">Change from child</a>
    <br />
    {{ parentData }}
  `,
  styleUrls: ['./ng-on-changes-child.component.css'],
})
export class NgOnChangesChildComponent implements OnInit {
  @Input() parentData: any;
  constructor() {}

  ngOnInit() {}

  changeFromChild() {
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}

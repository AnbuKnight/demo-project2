import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-parent',
  template: `
    <a (click)="changeFromParent()">Change from parent</a>
    <br />
    <app-ng-on-changes-child [parentData]="data"></app-ng-on-changes-child>
  `,
  styleUrls: ['./ng-on-changes-parent.component.css'],
})
export class NgOnChangesParentComponent implements OnInit {
  data = 0;
  constructor() {}

  ngOnInit() {}

  changeFromParent() {
    this.data += 1;
  }
}

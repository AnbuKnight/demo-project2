import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked',
  templateUrl: './ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-checked.component.css'],
})
export class NgAfterContentCheckedComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck() {
    console.log('do check');
  }
  ngAfterContentChecked() {
    console.log('after content checked');
  }
  clickMe() {
    console.log('link clicked');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-checked',
  templateUrl: './ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-checked.component.css'],
})
export class NgAfterViewCheckedComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck() {
    console.log('do check');
  }
  ngAfterViewChecked() {
    console.log('after view checked');
  }
  clickMe() {
    console.log('link clicked');
  }
}

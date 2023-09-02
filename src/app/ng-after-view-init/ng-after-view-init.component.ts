import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.css'],
})
export class NgAfterViewInitComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck() {
    console.log('do check');
  }
  ngAfterViewInit() {
    console.log('after view init');
  }
  clickMe() {
    console.log('link clicked');
  }
}

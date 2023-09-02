import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  templateUrl: './ng-after-content-init.component.html',
  styleUrls: ['./ng-after-content-init.component.css'],
})
export class NgAfterContentInitComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('onInit called');
  }
  ngDoCheck() {
    console.log('do check');
  }
  ngAfterContentInit() {
    console.log('after content init');
  }
  clickMe() {
    console.log('link clicked');
  }
}

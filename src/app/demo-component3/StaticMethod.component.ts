import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-method',
})
export class StaticMethodComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  static pi: number = 3.14;
  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  //Non Static property:
  pi1 = 3;
}

//Accessing Static properties
StaticMethodComponent.pi;
StaticMethodComponent.calculateArea;

//Accessing Non static properties
//StaticMethodComponent.pi1;
let testVar = new StaticMethodComponent();
testVar.pi1;

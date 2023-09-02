import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-protected-modifier',
  templateUrl: './demo-protected-modifier.component.html',
  styleUrls: ['./demo-protected-modifier.component.css'],
})
export class DemoProtectedModifierComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
class Student {
  studCode: number;
  protected studName: string;
  private addr: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
}
class Person extends Student {
  private department: string;

  constructor(code: number, name: string, department: string) {
    super(code, name);
    this.department = department;
  }
  public getElevatorPitch() {
    //var tt=this.addr;
    return `My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`;
  }
}
let joeRoot: Person = new Person(1, 'JoeRoot', 'CS');
console.log(joeRoot.getElevatorPitch());

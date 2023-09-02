import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component2',
  templateUrl: './demo-component2.component.html',
  styleUrls: ['./demo-component2.component.css'],
})
export class DemoComponent2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  function1() {
    const person1: any = new Person();
    person1.name = 'Kevin Odongo';
    person1.age = 36;
    console.log(person1.greetings()); // This should render Kevin Odongo 36
  }
}

class Person {
  name: string = ''; // default
  age: number = 0; // default

  greetings() {
    return this.name + ' ' + this.age;
  }

  functionAccessingEncapsulation() {
    // create a new instance of each
    const personObject = new Person();
    const motorObject = new Motor();

    // warning Property 'age' does not exist on type 'Motor'
    //motorObject.age();
  }
}

class Person1 {
  name: string = '';
  age: number = 0;
}

// motor vehicle object
class Motor {
  make: string = '';
  model: string = '';
  color: string = '';
}

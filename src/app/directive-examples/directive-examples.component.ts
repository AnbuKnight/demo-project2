import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-examples',
  templateUrl: './directive-examples.component.html',
  styleUrls: ['./directive-examples.component.css'],
})
export class DirectiveExamplesComponent implements OnInit {
  constructor() {}
  variable1 = 'test1';
  field1 = 'value1ee';
  myBool: boolean = false;

  ngOnInit(): void {}
  setClasses() {
    return 'class1';
  }
  people: any[] = [
    {
      name: 'Douglas  Pace',
      country: 'UK',
    },
    {
      name: 'Mcleod  Mueller',
      country: 'USA',
    },
    {
      name: 'Day  Meyers',
      country: 'HK',
    },
    {
      name: 'Aguirre  Ellis',
      country: 'UK',
    },
    {
      name: 'Cook  Tyson',
      country: 'USA',
    },
  ];
  getColor(country: any) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

  modelChangedForTextBox(event: any) {
    console.log(event);
    this.field1 = 'value updated from typescript';
  }

  items: item[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
  ];
  selectedValue: string = 'Two';
}
class item {
  name: string;
  val: number;
}

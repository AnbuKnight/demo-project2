import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-impure-pipe-example',
  templateUrl: './pure-impure-pipe-example.component.html',
  styleUrls: ['./pure-impure-pipe-example.component.css'],
})
export class PureImpurePipeExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nameString = '';
  employees = [
    {
      firstName: 'Rohit',
      lastName: 'Sharma',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2012-04-22'),
    },
    {
      firstName: 'Aditi',
      lastName: 'Mishra',
      dept: 'Sales',
      salary: 6000,
      doj: new Date('2016-09-16'),
    },
    {
      firstName: 'Dipti',
      lastName: 'Singh',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2021-09-03'),
    },
  ];

  addUser() {
    this.employees.push({
      firstName: 'Rahul',
      lastName: 'Yadav',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2016-11-19'),
    });
  }

  reset() {
    this.employees = this.employees.slice();
  }
}

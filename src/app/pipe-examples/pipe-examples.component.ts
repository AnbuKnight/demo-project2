import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  templateUrl: './pipe-examples.component.html',
  styleUrls: ['./pipe-examples.component.css'],
})
export class PipeExamplesComponent implements OnInit {
  constructor() {}
  title = 'Angular Project!';
  todaydate = new Date();
  jsonval = {
    name: 'Rox',
    age: '25',
    address: { a1: 'Mumbai', a2: 'Karnataka' },
  };
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  ngOnInit(): void {}
}

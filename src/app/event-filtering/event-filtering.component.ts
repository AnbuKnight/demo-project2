import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css'],
})
export class EventFilteringComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public handleEvent(event): void {
    // compare key code with code of enter key
    if (event.keyCode === 13) {
      console.log('Enter key pressed');
    }
  }

  public handleEventDirect(): void {
    console.log('Enter key pressed');
  }
}

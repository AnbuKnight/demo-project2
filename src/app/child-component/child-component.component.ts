import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  constructor() {}
  @Input() item: any = '';
  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {}
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  @Input() item = '';
  currentItem = 'Television';
  constructor(private route: ActivatedRoute) {}

  items = ['item1', 'item2', 'item3', 'item4'];

  ngOnInit(): void {
    //Below logic is to receive inputs through routing
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   var receivedInputFromRoute=params.get('routerParamValue');
    // })
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}

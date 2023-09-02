import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.css'],
})
export class ElementRefComponent implements AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('hello', { static: false }) divHello: ElementRef;

  ngAfterViewInit() {
    this.divHello.nativeElement.innerHTML = 'Hello Angular';
    //this.divHello.nativeElement.className="someClass";
    this.divHello.nativeElement.style.backgroundColor = 'red';
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}
  @Input('appHighlight') highlightColor: string;
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}

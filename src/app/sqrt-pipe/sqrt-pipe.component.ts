import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt',
})
export class SqrtPipeComponent implements PipeTransform {
  constructor() {}
  transform(val: number): number {
    return Math.sqrt(val);
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipeComponent implements PipeTransform {
  transform(value: any, name: string) {
    if (name === '') {
      return value;
    }
    var tt = value.filter((employee) =>
      String(employee.firstName).startsWith(name)
    );
    return value.filter((employee) =>
      String(employee.firstName).startsWith(name)
    );
  }
}

import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
})
export class InterfaceComponent implements OnInit {
  constructor() {}
variable1:string;
  ngOnInit(): void {
    
    //creating normal object
    var person = {
      FirstName: 'Tom',
      LastName: 'Hanks',
    };

    //creating object with interface
    var customer: IPerson = {
      firstName: 'Tom',
      lastName: 'Hanks',     
    };
    console.log(customer.firstName);
    console.log(customer.lastName);
    var customer1 = {
      firstName: 'Tom',
      lastName: 'Hanks', 
      addr:"test"    
    };
  }
}

interface IPerson {
  firstName: string;
  lastName: string;
}

interface Logger {
  log: (message: string) => void;
}

//Interface as type
const logger: Logger = {
  log: (message) => console.log(message),
};

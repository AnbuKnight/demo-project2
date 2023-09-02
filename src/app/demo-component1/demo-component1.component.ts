import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component1',
  templateUrl: './demo-component1.component.html',
  styleUrls: ['./demo-component1.component.css']
})
export class DemoComponent1Component implements OnInit {

  constructor() {
    // Access String Enum 
PrintMedia33.Newspaper; //returns NEWSPAPER
PrintMedia33['Magazine'];//returns MAGAZINE
   }

   public stringValue:any;
  ngOnInit(): void {
    //this.stringValue="te|st";
    if(this.stringValue!=null && this.stringValue!=undefined)
    {
      this.stringValue.split('|');
    }
    
    this.tupleExplanation();
    let mediaType: PrintMedia = this.getMedia('Forbes');
    let variableOfTypeVoid: void = this.voidFunction(); 
    console.log(variableOfTypeVoid); //Output: undefined
  }

  tupleExplanation()
  {
    //tuple declaration for two values of different data type
    var employee: [number, string] = [1, "Steve"];

    //tuple declaration for three  values of different data type
    var person: [number, string, boolean] = [1, "Steve", true];

    var user: [number, string, boolean, number, string];// declare tuple variable
    user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

    //tuple array
    var employeeArray: [number, string][];
    employeeArray = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

    //accessing Tuple
    var employee: [number, string] = [1, "Steve"];
    employee[0]; // returns 1
    employee[1]; // returns "Steve"

    //adding data to tuple
    var employee: [number, string] = [1, "Steve"];
    employee.push(2, "Bill"); 
    console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

    //adding data of incorrect data type
    //employee.push(true);
    employee.push("string");
  }
  ///////////////////////////////////////////////////////////////////////////////////
  /////////////////////////  ENUM  /////////////////////////////

  getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

 getPrintMediaCode(mediaName: string): number {
  if (mediaName === 'newsletter') {
      return 5;
  }
}
 
 reverseMappingOfTuple()
 {
  PrintMedia4.Magazine;   // returns  3
  PrintMedia4["Magazine"];// returns  3
  PrintMedia4[3];         // returns  Magazine
  console.log(PrintMedia);
 }

 voidFunction()
 {
   console.log('printing inside void function');
 }

}

enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}

enum PrintMedia1 {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

enum PrintMedia2 {
  Newspaper = 1,
  Newsletter = 5,
  Magazine = 5,
  Book = 10,
  constantValue=44
}

//Computed Enum
enum PrintMedia5 {
  Newspaper = 1,
  Newsletter = 2,
  Magazine = Newsletter * 3,
  Book = 10
}

///String Enum
enum PrintMedia33 {
  Newspaper = "NEWSPAPER",
  Newsletter = "NEWSLETTER",
  Magazine = "MAGAZINE",
  Book = "BOOK"
}

//Heterogeneous Enum
enum Status { 
  Active = 'ACTIVE', 
  Deactivate = 1, 
  Pending
}

//Reverse mapping
enum PrintMedia4 {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

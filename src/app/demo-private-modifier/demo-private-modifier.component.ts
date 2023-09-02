import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-private-modifier',
  templateUrl: './demo-private-modifier.component.html',
  styleUrls: ['./demo-private-modifier.component.css']
})
export class DemoPrivateModifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Student {  
  public studCode: number;  
  private studName: string;  
  constructor(code: number, name: string){  
  this.studCode = code;  
  this.studName = name;  
  }  
  public display() {  
  return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
  }  
  }  
    
  let student: Student = new Student(1, "JoeRoot"); 
  //var x=student.studName;
  console.log(student.display());

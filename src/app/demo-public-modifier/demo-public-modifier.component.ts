import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-public-modifier',
  templateUrl: './demo-public-modifier.component.html',
  styleUrls: ['./demo-public-modifier.component.css']
})
export class DemoPublicModifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Student {  
  public studCode: number;  
  studName: string;  
}  

let stud = new Student();  
stud.studCode = 101;  
stud.studName = "Joe Root";  

console.log(stud.studCode+ " "+stud.studName);  
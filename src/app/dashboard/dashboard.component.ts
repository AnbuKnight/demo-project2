import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public slideIndex:number = 1;
  public var2;

  ngOnInit(): void {  
    this.showSlides(this.slideIndex);
  }



// Next/previous controls
 plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

 showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute("style", "display:none" );
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].setAttribute("style", "display:block" );
  dots[this.slideIndex-1].className += " active";
  
  var variable1:number=2;
 var x=1+variable1;

 var t:any;
 t.callmethod();  

 let number1=new Number(123);
 var y=number1.valueOf()+4;
 var v="testString";

 var yu:string;
 yu.concat();
 yu.split(',');

 var r:class112;

 var array2:Array<string>;
array2.slice()

}

}
export class class112
{
  var1:Number;
  method()
  {

  }
}

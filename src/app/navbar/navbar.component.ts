import { Component, OnInit } from '@angular/core';
import { NavService } from '../Service/navbar.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Observable } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public applyTabStyle: boolean = false;
  public activeTab: string = 'dataSet';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tabChange(event: any) {
    this.applyTabStyle = true;
  }

  loadScreen(input: any) {
    switch (input) {
      case 'menu1':
        this.router.navigateByUrl('/screen1');
        break;
      case 'contact':
        this.router.navigateByUrl('/contact');
        break;
      case 'dashboard':
        this.router.navigateByUrl('/dashboard');
        break;
      default:
        this.router.navigateByUrl('');
        break;
    }
  }

}


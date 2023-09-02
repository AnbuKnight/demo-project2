import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';
import { DataServiceService } from './data-service.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-project2';
  public isUserLoggedin: boolean = false;
  public intArray: any = [1, 2, 3, 4, 5];
  color = 'red';
  condition = true;
  heroes: any = [];

  constructor(private loginService: LoginService, private _dataService: DataServiceService) {}
  ngOnInit(): void {
    for (var i = 0; i < this.intArray.length; i++) {
      console.log(i);
    }
    this.loginService.getEmitter().subscribe((isUserLoggedIn) => {
      this.isUserLoggedin = isUserLoggedIn;
    });
    this.getHeroes();
  }
  //this.loginService.testFunction1();

  ngDestroy() {
    //logic to clear local cache values
  }

    getHeroes(): void {
    this._dataService.getHeroes()
    .subscribe((res) => {
      console.log("Response received from External source");
      console.log(res);
      this.heroes=res;      
    });
  }
}

export class class1 {
  id: number;
  function1() {}
}

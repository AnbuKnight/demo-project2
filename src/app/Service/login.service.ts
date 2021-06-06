import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) { }
    private isloggedIn = false;
    private role: string;
    private id: number;
    @Output() IsUserLoggedIn: EventEmitter<any> = new EventEmitter<any>();
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
      }

    public getUserDetailsfromJSON(): Observable<any> {
        let exception: any;
        const apiUrl = './assets/users.json';
        return this.http.get(apiUrl)
            .pipe(map((res: any) => res as USERS[]));
    }

    validateUser(email: string, password: string): Observable<any> {
        return this.getUserDetailsfromJSON().pipe(map(users => {
            let i = 0;
            while (i < users.length) {
                if (email === users[i].email && password === users[i].password) {
                    console.log('User logged in Successfully');
                    this.isloggedIn = true;
                    this.IsUserLoggedIn.emit(true);
                } else {
                    this.isloggedIn = false;
                    console.log('User login failed');
                    alert('User login failed. Invalid credentials');
                }
                i++;
            }            
            return [this.id, this.role];
        }));
    }

    getEmitter() { 
        return this.IsUserLoggedIn; 
      }

}

export interface USERS {
    id: number;
    email: string;
    password: string;
    role: string;
}
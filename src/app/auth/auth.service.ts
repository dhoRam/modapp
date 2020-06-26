import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn : boolean;
  userType : string;
  private authStatusListener = new Subject<boolean>();

  constructor() { }

  loginUser(reqBody): Observable<any> {
    this.authStatusListener.next(true);
    return;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  logout(){
    this.authStatusListener.next(false);
  }
}

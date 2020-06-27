import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;
  userType: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private route: Router) { }

  loginUser(reqBody): Observable<any> {
    this.authStatusListener.next(true);
    return;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  logout() {
    this.authStatusListener.next(false);
    this.route.navigate(['/']);
  }
}

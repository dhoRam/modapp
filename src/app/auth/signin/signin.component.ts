import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: any = '';
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    console.log(this.email);
    this.authService.loginUser(this.email);
    this.authService.userType = this.email;
    this.route.navigate([this.email]);
  }

}

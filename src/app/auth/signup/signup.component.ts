import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }
  signUp() {
    if (this.form.valid) {
      const reqBody = new User(
        this.form.value.email,
        this.form.value.password
      );
      this.authService.createUser(reqBody).subscribe(res => {
        alert('Success !');
        this.route.navigate(['/auth/login']);
      }, error => {
        console.log('error!');
      });
    } else {
      alert('error !');
    }
  }
}
export class User {
  constructor(public username: string, public password: string) {

  }
}
import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {

  }

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

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      const reqBody = new User(
        this.form.value.email,
        this.form.value.password
      );
      this.authService.loginUser(reqBody).subscribe(
        response => {

          this.route.navigate(['/admin']);

        },
        error => {
        }
      );
    } else {
      alert('error !');
    }
  }

}
export class User {
  constructor(public username: string, public password: string) {

  }
}

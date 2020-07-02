import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {

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
      this.loggedIn.emit(
        new User(
          this.form.value.email,
          this.form.value.password
        )
      );
      console.log(this.form.value.email);
      // this.authService.loginUser(this.form.value.email);
      // this.authService.userType = this.form.value.email;
      // this.route.navigate([this.form.value.email]);
    } else {
      alert('error !');
    }
  }

}
export class User {
  constructor(public email: string, public password: string) {

  }
}

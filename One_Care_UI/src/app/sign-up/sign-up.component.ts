import { SignupService } from "./../signup.service";

import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  // email = this.logForm.get('email')?.value;
  // password = this.logForm.get('password')?.value;
  // Passwordregex: any =
  //   /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
  // disabled = new FormControl(false);
  message = new FormControl("Sign Up here..!");
  constructor(
    private fb: FormBuilder,
    private signUpService: SignupService,
    private router: Router
  ) {
    this.signUpForm = new FormGroup({
      name: new FormControl("", [Validators.min(4), Validators.required]),
      email: new FormControl("", [Validators.email, Validators.required]),
      contact: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
        ),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(10),
      ]),
    });
  }
  ngOnInit(): void {}
  get name() {
    return this.signUpForm.get("name");
  }
  get email() {
    return this.signUpForm.get("email");
  }
  get contact() {
    return this.signUpForm.get("contact");
  }
  get password() {
    return this.signUpForm.get("password");
  }
  signUp() {
    console.log(this.signUpForm.value);
    this.signUpService.signUp(this.signUpForm.value).subscribe((res) => {
      console.log(res);
      alert("You have Successfully registered!!");
    });
    this.router.navigate(["login"]);
  }
  getErrorMessage() {
    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

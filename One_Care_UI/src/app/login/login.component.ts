import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  logForm!: FormGroup;
  hide = true;
  showMsg: boolean = false;
  message = new FormControl("Login here..!");
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit(): void {
    this.logForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.min(6),
        Validators.max(10),
      ]),
    });
  }
  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  login() {
    console.log("Login() function");

    console.log(this.logForm.value);
    this.authService.login(this.logForm.value).subscribe((res) => {
      localStorage.setItem("userInfo", JSON.stringify(res));
      // window.location.reload();
      console.log(res);
      if (res.status) {
        console.log("jjdjf");
        this.authService.subject.next(true);
        alert(`${res.message}`);
        this.router.navigate(["home"]);
      }
    });
  }
  get email() {
    return this.logForm.get("email");
  }
  get password() {
    return this.logForm.get("password");
  }
  getErrorMessage() {
    // this.email = this.logForm.get('email')?.value;
    // if (this.email.hasError('required')) {
    //   return 'You must enter a value';
    // }
    // return 'Not a Valid Email.';
    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

import { AppointmentService } from "./../appointment.service";
import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";
import { Component, OnInit, Input } from "@angular/core";
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs!: boolean;
  headersLoader: boolean = false;
  token: any;
  // slideBarVariable = [];
  adminName: string = "";
  // doctorName: string = '';
  // patientName: string = '';
  // appointmentName: string = '';
  bool: boolean = false;
  constructor(
    public authService: AuthService,
    private route: Router,
    private appointService: AppointmentService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  @Input() data: any;
  ngOnInit(): void {
    this.token = localStorage.getItem("userInfo")
      ? localStorage.getItem("userInfo")
      : null;
    console.log(this.token);
    if (this.token != null && this.token != undefined) {
      this.headersLoader = true;
    }
    // if (this.authService.subject) {
    //   this.headersLoader = true;
    //   // console.log(res);
    // } else {
    //   console.log("Else");
    // }
    this.authService.subject.subscribe((res) => {
      this.headersLoader = res;
      console.log(res);
    });
  }

  loggedIn() {
    // this.adminName = 'login';
    // this.imageLoader = false;
    // this.bool = true;
    this.socialAuthService.signOut();
    this.authService.subject.subscribe((res) => {
      this.headersLoader = res;
      console.log(res);
    });
    this.route.navigate(["login"]);
    // if (this.authService.login(this.data)) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  logout() {
    localStorage.removeItem("userInfo");
    alert("Successfully Logged Out.");
    this.headersLoader = false;
    // window.location.reload();
    this.route.navigate(["/login"]);
  }
}

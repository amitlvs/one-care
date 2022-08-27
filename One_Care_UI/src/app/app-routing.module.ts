import { LoginAuthGuard } from "./login-auth.guard";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { ViewAppointmentComponent } from "./view-appointment/view-appointment.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminComponent } from "./admin/admin.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { PatientComponent } from "./patient/patient.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "home",
    children: [
      { path: "", component: HomeComponent },
      { path: "appointment", component: AppointmentComponent },
      {
        path: "viewAppointment",
        component: ViewAppointmentComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: "login", component: LoginComponent, canActivate: [LoginAuthGuard] },
  // { path: "signup", component: SignUpComponent },
  {
    path: "signup",
    component: SignUpComponent,
  },
  { path: "contactus", component: ContactUsComponent },
  { path: "about", component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: "profile", component: UserProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "admin", component: AdminComponent },
  { path: "doctor", component: DoctorComponent },
  { path: "patient", component: PatientComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

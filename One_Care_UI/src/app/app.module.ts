import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentMiddleSectionComponent } from "./content-middle-section/content-middle-section.component";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SlidebarComponent } from "./slidebar/slidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { PatientComponent } from "./patient/patient.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { AdminComponent } from "./admin/admin.component";
// import { mdiGoogleStreetView } from '@mdi/js';
import { HttpClientModule } from "@angular/common/http";
import { ViewAppointmentComponent } from "./view-appointment/view-appointment.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SocialLoginModule, GoogleLoginProvider } from "angularx-social-login";
import { SocialAuthServiceConfig } from "angularx-social-login";
// import { DropdownModule } from "primeng/primeng";
import { AgmCoreModule } from "@agm/core";
import { GMapModule } from "primeng/gmap";
import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
import { MenuItem } from "primeng/api";
import { MessageService } from "primeng/api";
import { CheckboxModule } from "primeng/checkbox";
import { ToastModule } from "primeng/toast";
import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentMiddleSectionComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutUsComponent,
    UserProfileComponent,
    SlidebarComponent,
    DashboardComponent,
    AppointmentComponent,
    PatientComponent,
    DoctorComponent,
    AdminComponent,
    ViewAppointmentComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SocialLoginModule,
    GMapModule,
    AccordionModule,
    DialogModule,
    ToastModule,
    CheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAgYBzxHNgB5yv72HGwZHBWrzNNTB1kMGA",
    }),
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "581991388547-auealk9fotl4b2caaibb5cru5nttkf05.apps.googleusercontent.com"
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

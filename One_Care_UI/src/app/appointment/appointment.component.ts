import { Router } from "@angular/router";
import { ViewAppointmentComponent } from "./../view-appointment/view-appointment.component";
import { AppointmentService } from "./../appointment.service";
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { BookingService } from "./../booking.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Component, OnInit, Input, Inject } from "@angular/core";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"],
})
export class AppointmentComponent implements OnInit {
  gender = ["Male", "Female", "Others"];
  actionBtn: String = "Save";
  appointForm!: FormGroup;
  AppointmentType!: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private bookingService: BookingService,
    private appointService: AppointmentService,
    private dialogRef: MatDialogRef<ViewAppointmentComponent>,
    private router: Router
  ) {
    this.AppointmentType = fb.group({
      Cervixcheckup: false,
      Heartcheckup: false,
      Eyecheckup: false,
      HearingTest: false,
    });
  }

  ngOnInit(): void {
    this.appointForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.min(6),
        Validators.max(10),
      ]),
      gender: new FormControl(null, Validators.required),
      contact: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"
        ),
      ]),
      age: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      appointmentType: new FormControl(null, [Validators.required]),
      date: new FormControl(null, Validators.required),
      description: new FormControl(null, []),
    });
    // console.log(this.editData.name);

    if (this.editData) {
      this.actionBtn = "Update";
      this.appointForm.controls["name"].patchValue(this.editData.name);
      this.appointForm.controls["email"].setValue(this.editData.email);
      this.appointForm.controls["gender"].setValue(this.editData.gender);
      this.appointForm.controls["contact"].setValue(this.editData.contact);
      this.appointForm.controls["age"].setValue(this.editData.age);
      this.appointForm.controls["address"].setValue(this.editData.address);
      this.appointForm.controls["appointmentType"].setValue(
        this.editData.appointmentType
      );
      this.appointForm.controls["date"].setValue(this.editData.date);
      this.appointForm.controls["description"].setValue(
        this.editData.description
      );
    }
  }
  // Adding Booking
  addBooking() {
    if (!this.editData) {
      console.log("Add Booking");

      if (this.appointForm.valid) {
        this.bookingService.postBooking(this.appointForm.value).subscribe({
          next: (res) => {
            alert("Booking done successfully.");
            this.appointForm.reset();
            this.dialogRef.close();
            if (localStorage.getItem("userInfo")) {
              this.router.navigate(["/home/viewAppointment"]);
            }
          },
          error: () => {
            alert("Error while booking");
          },
        });
      }
    } else {
      console.log("Update Booking");

      this.updateBooking();
    }
  }
  // Updating Method
  updateBooking() {
    console.log("Opening");
    console.log(this.editData._id);

    this.appointService
      .putBooking(this.appointForm.value, this.editData._id)
      .subscribe({
        next: (res) => {
          alert("Booking updated successfully.");
          this.appointForm.reset();
          this.dialogRef.close();
          window.location.reload();
        },
        error: () => {
          alert("Error while updating the data");
        },
      });
  }
  // Booking Method
  book() {
    console.log("You have booked appointment");
    console.log(this.appointForm.value);
    this.appointForm.reset();
    this.router.navigate(["home"]);
  }
  get name() {
    return this.appointForm.get("name");
  }
  get email() {
    return this.appointForm.get("email");
  }
  get contact() {
    return this.appointForm.get("contact");
  }
  get age() {
    return this.appointForm.get("age");
  }
  get address() {
    return this.appointForm.get("address");
  }
  get appointmentType() {
    return this.appointForm.get("appointmentType");
  }
}

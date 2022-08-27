import { Router } from "@angular/router";
import { AppointmentComponent } from "./../appointment/appointment.component";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { AppointmentService } from "./../appointment.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() deviceXs!: boolean;
  dataSource!: MatTableDataSource<any>;
  token: any = localStorage.getItem("userInfo");
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
  openDialog() {
    if (!localStorage.getItem("userInfo")) {
      this.router.navigate(["login"]);
    } else {
      this.dialog.open(AppointmentComponent, {
        width: "55%",
      });
    }
  }
  viewAppointment() {
    if (this.token) {
      this.router.navigate(["/home/viewAppointment"]);
    } else {
      alert("You have to login first..!!");
      this.router.navigate(["login"]);
    }
  }
  // getAllAppointment() {
  //   this.appointService.getBooking().subscribe({
  //     next: (res) => {
  //       console.log(res);

  //       this.dataSource = new MatTableDataSource(res.data);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       alert("Error while fetching the records!!");
  //     },
  //   });
  // }
}

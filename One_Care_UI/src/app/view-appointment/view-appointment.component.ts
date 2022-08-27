import { AppointmentComponent } from "./../appointment/appointment.component";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AppointmentService } from "./../appointment.service";
import { MatTableDataSource } from "@angular/material/table";
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  Inject,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
  styleUrls: ["./view-appointment.component.css"],
})
export class ViewAppointmentComponent implements OnInit {
  id: string = "";
  name: string = "";
  progress: string = "";
  fruit: string = "";
  displayedColumns: string[] = [
    "name",
    "email",
    "contact",
    "gender",
    "age",
    "address",
    "appointmentType",
    "date",
    "description",
    "action",
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(AppointmentComponent) appointComp!: AppointmentComponent;
  constructor(
    private appointService: AppointmentService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllAppointment();
    // console.log(this.editData);/
  }
  getAllAppointment() {
    this.appointService.getBooking().subscribe({
      next: (res) => {
        console.log(res);

        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while fetching the records!!");
      },
    });
  }
  updateBooking(row: any) {
    console.log(row);
    // this.getAllAppointment(),
    this.dialog.open(AppointmentComponent, {
      width: "60%",
      data: row,
    });
    // this.getAllAppointment();
  }
  deleteBooking(row: any) {
    console.log("hola");
    console.log(row._id);
    this.appointService.deleteBooking(row._id).subscribe({
      next: (res) => {
        alert("Booking Deleted Successfully!!");
        this.getAllAppointment();
      },
      error: () => {
        alert("Error while deleting the record!!");
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

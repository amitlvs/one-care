import { HttpClient } from "@angular/common/http";
import { identifierName } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppointmentService {
  getUrl = "http://localhost:8000/book/getAppointment";
  putUrl = "http://localhost:8000/book/editAppointment/";
  deleteUrl = "http://localhost:8000/book/deleteAppointment/";
  constructor(private http: HttpClient) {}
  getBooking() {
    return this.http.get<any>(this.getUrl);
  }
  putBooking(data: any, id: number) {
    console.log(id);

    return this.http.put<any>(this.putUrl + id, data);
  }
  deleteBooking(id: number) {
    console.log(id);

    return this.http.delete<any>(this.deleteUrl + id);
  }
}

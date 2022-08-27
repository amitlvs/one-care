import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:8000/book/bookAppointment";
  postBooking(data: any) {
    return this.http.post<any>(this.baseUrl, data);
  }
}

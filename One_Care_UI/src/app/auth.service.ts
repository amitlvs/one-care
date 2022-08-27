import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, Subject, BehaviorSubject } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
// import jwt_decode from 'jwt-decode';
import * as JWT from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  auth: boolean = false;
  response!: Observable<any>;
  baseUrl = "http://localhost:8000/user/login";
  subject = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    this.response = <Observable<any>>this.http.post<any>(this.baseUrl, data);
    if (this.response) {
      this.auth = true;
    }
    return this.response;
  }
  isLoggedIn() {
    // return localStorage.getItem("userInfo") != null;
    return this.auth;
  }
}

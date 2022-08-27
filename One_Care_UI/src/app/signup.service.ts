import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  baseUrl = 'http://localhost:8000/user/register';
  constructor(private http: HttpClient) {}
  signUp(data: any): Observable<any> {
    console.log('Hola');
    let headers = new HttpHeaders();
    return this.http.post<any>(this.baseUrl, data, { headers: headers });
  }
}

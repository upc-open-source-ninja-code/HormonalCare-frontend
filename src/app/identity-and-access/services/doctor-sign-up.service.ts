import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorSignUpService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  signUpDoctor(doctor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/doctor/doctor`, doctor);
  }
}

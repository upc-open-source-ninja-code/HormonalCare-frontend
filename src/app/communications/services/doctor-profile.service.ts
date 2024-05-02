import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from "../../shared/services/base.service";
import { DoctorProfile } from "../model/doctor-profile";

@Injectable({
  providedIn: 'root'
})
export class DoctorProfileService{

  private apiUrl = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) { }

  searchDoctorByEmail(email: string): Observable<DoctorProfile[]> {
    return this.http.get<DoctorProfile[]>(`${this.apiUrl}?email=${email}`);
  }
}

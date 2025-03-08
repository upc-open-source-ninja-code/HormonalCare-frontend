import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-in`, { username, password });
  }

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-up`, user);
  }

  getProfile(userId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/profile/profile/userId/${userId}`, { headers });
  }

  getDoctorProfile(profileId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/doctor/doctor/profile/${profileId}`, { headers });
  }

  getPatientProfile(profileId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}/medical-record/patient/profile/${profileId}`, { headers });
  }
}

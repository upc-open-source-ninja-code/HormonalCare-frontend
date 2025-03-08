import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatientSignUpService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}

  signUpPatient(user: any, profile: any, patient: any): Observable<any> {
    return new Observable(observer => {
      this.authService.signUp(user).subscribe(userResponse => {
        const userId = userResponse.id;
        profile.userId = userId;

        this.http.post(`${this.baseUrl}/profile/profile`, profile).subscribe(profileResponse => {
          patient.userId = userId;
          this.http.post(`${this.baseUrl}/medical-record/patient`, patient).subscribe(patientResponse => {
            observer.next(patientResponse);
            observer.complete();
          }, error => observer.error(error));
        }, error => observer.error(error));
      }, error => observer.error(error));
    });
  }
}

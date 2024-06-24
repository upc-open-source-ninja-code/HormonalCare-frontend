import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalExamsService {
  private basePath = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getMedicalExams(medicalRecordId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.basePath}/medical-record/medical-exam/medicalRecordId/${medicalRecordId}`);
  }

}

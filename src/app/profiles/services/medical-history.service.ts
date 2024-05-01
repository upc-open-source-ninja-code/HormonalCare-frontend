import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from "../../shared/services/base.service";
import { MedicalHistory } from "../model/medical-history";

@Injectable({
  providedIn: 'root'
})

export class MedicalHistoryService extends BaseService<MedicalHistory> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000';
    this.resourceEndpoint = '/medical_history';
  }

  getMedicalHistoryDetails(id: string): Observable<MedicalHistory> {
    return this.http.get<MedicalHistory>(`${this.basePath}${this.resourceEndpoint}/${id}`);
  }
}

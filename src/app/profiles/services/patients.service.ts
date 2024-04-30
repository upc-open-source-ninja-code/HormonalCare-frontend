import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {PatientsAppointmentsEntity} from "../model/patients-appointments.entity";

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends BaseService<PatientsAppointmentsEntity>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000';
    this.resourceEndpoint= '/patient-appointments';

}
}

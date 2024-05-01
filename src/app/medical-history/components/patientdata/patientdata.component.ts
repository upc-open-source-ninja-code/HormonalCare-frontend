import { Component, OnInit } from '@angular/core';

import {PatientsDataService } from "../../services/patients-data.service";


import {PatientEntity} from "../../../profiles/model/patient.entity";

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {
  patient: PatientEntity = new PatientEntity();

  constructor(private patientsDataService: PatientsDataService) {}

  ngOnInit() {
    this.getPatientDetails('1'); // Reemplaza '1' con el ID del paciente que deseas obtener
  }

  getPatientDetails(id: string) {
    this.patientsDataService.getPatientDetails(id)
      .subscribe((data: PatientEntity) => {
        this.patient = data;
      }, error => {
        console.log('Error fetching patient details:', error);
      });
  }
}

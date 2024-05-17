import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";

import { PatientEntity } from "../../model/patient.entity";
import {PatientsProfileService} from "../../services/patients-profile.service";
import {MedicalAppointmentsService} from "../../services/medical-appointment.service";
import {MedicalAppointmentEntity} from "../../model/medical-appointment.entity";
import {forkJoin, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
  appointmentData: MedicalAppointmentEntity[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'age', 'clinicHistory', 'typeOfCare', 'hour', 'diagnosis', 'alert', 'videoConference'];
  showMedicalHistory = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private patientService: PatientsProfileService,
    private medicalAppointmentService: MedicalAppointmentsService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  navigateToMedicalHistory() {
    this.router.navigate(['/medical-history']);
  }

  ngOnInit() {
    this.getAllPatientAppointments();
  }

  private getAllPatientAppointments() {
    this.patientService.getAll().subscribe((response: any) => {
      this.appointmentData = response;
      this.populateDataSourceWithPatientNames();
    });
  }

  private populateDataSourceWithPatientNames() {
    const appointmentsWithPatientDetails: any[] = [];
    const observables: Observable<any>[] = [];

    for (const appointment of this.appointmentData) {
      const observable = this.medicalAppointmentService.getMedicalAppointmentById(appointment.id).pipe(
        switchMap((medicalAppointment: any) => {
          const patientId = medicalAppointment.idPatient;
          return this.patientService.getPatientDetails(patientId).pipe(
            map((patient: PatientEntity) => {
              const age = this.calculateAge(patient.birthdate); // Calculate age from birthdate
              return {
                ...medicalAppointment, // Include all medical appointment details
                name: `${patient.name} ${patient.lastname}`,
                age: age,
                hour: `${medicalAppointment.startDate} `
              };
            })
          );
        })
      );
      observables.push(observable);
    }

    forkJoin(observables).subscribe((results: any[]) => {
      this.dataSource.data = results;
    });
  }


  private calculateAge(birthdate: string): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

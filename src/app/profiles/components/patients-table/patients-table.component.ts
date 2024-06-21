import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { PatientEntity } from "../../model/patient.entity";
import { PatientsProfileService } from "../../services/patients-profile.service";
import { MedicalAppointmentsService } from "../../services/medical-appointment.service";
import { MedicalAppointmentEntity } from "../../model/medical-appointment.entity";
import { ProfilesService } from "../../services/profiles.service"; // Import ProfilesService
import { ProfilesEntity } from "../../model/profiles.entity"; // Import ProfilesEntity
import { forkJoin, Observable, of, switchMap } from "rxjs";
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
  appointmentData: MedicalAppointmentEntity[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'age', 'clinicHistory', 'hour', 'videoConference'];
  showMedicalHistory = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private patientService: PatientsProfileService,
    private medicalAppointmentService: MedicalAppointmentsService,
    private profileService: ProfilesService, // Inject ProfilesService
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
    this.getAllMedicalAppointments();
  }

  private getAllMedicalAppointments() {
    let id = 1;
    const observables: Observable<any>[] = [];

    const getAppointment = () => {
      this.medicalAppointmentService.getMedicalAppointmentById(id).pipe(
        catchError(err => {
          // When there is an error (appointment does not exist), complete the observable sequence
          return of('completed');
        })
      ).subscribe((response: any) => {
        if (response !== 'completed') {
          this.appointmentData.push(response);
          const observable = this.patientService.getPatientDetails(response.idPatient).pipe(
            switchMap((patient: PatientEntity) => {
              return this.profileService.getProfileDetails(patient.id.toString()).pipe(
                map((profile: ProfilesEntity) => {
                  return {
                    ...response, // Include all medical appointment details
                    name: `${profile.firstName} ${profile.lastName}`,
                    age: `${profile.age} `,
                    hour: `${response.startDate} `
                  };
                })
              );
            })
          );
          observables.push(observable);
          id++;
          getAppointment(); // Recursive call to get the next appointment
        } else {
          // All appointments have been retrieved, now populate the dataSource
          forkJoin(observables).subscribe((results: any[]) => {
            this.dataSource.data = results;
          });
        }
      });
    };

    getAppointment(); // Initial call to start getting appointments
  }
}

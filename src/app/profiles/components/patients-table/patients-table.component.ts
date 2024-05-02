import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientsAppointmentsEntity } from "../../model/patients-appointments.entity";
import { PatientsService } from "../../services/patients.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
  appointmentData: PatientsAppointmentsEntity[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'age','clinicHistory', 'typeOfCare', 'hour', 'diagnosis', 'alert', 'videoConference'];
  showMedicalHistory = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;


  constructor(private patientService: PatientsService,private router: Router) {
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
      this.dataSource.data = this.appointmentData;
    });
  }
}

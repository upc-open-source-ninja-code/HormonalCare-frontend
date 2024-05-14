import { Component, OnInit } from '@angular/core';
import { PatientEntity } from "../../model/patient.entity";
import { PatientsProfileService } from "../../services/patients-profile.service";

@Component({
  selector: 'app-info-profile-patiens',
  templateUrl: './info-profile-patiens.component.html',
  styleUrls: ['./info-profile-patiens.component.css']
})
export class InfoProfilePatiensComponent implements OnInit {
  patientData!: PatientEntity;
  dataSource: PatientEntity[] = [];
  displayed: string[] = ['name', 'lastname', 'email', 'password'];

  constructor(private patientService: PatientsProfileService) {}

  ngOnInit() {
    this.getPatientDetails('1'); // replace '1' with the actual patient ID
  }

  private getPatientDetails(id: string) {
    this.patientService.getPatientDetails(id).subscribe((response: PatientEntity) => {
      this.patientData = response;
      this.dataSource = [this.patientData];
    });
  }

  sortData(sort: {active: string, direction: string}): void {
    if (!sort.active || sort.direction === '') {
      return;
    }

    this.dataSource = this.dataSource.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'lastname': return compare(a.lastname, b.lastname, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        case 'password': return compare(a.password, b.password, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

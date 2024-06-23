import { Component, OnInit } from '@angular/core';
import { PatientEntity } from "../../model/patient.entity";
import { PatientsProfileService } from "../../services/patients-profile.service";
import { ProfilesService } from "../../services/profiles.service"; // Import ProfilesService
import { switchMap, map } from 'rxjs/operators';
import {of} from "rxjs";

@Component({
  selector: 'app-info-profile-patiens',
  templateUrl: './info-profile-patiens.component.html',
  styleUrls: ['./info-profile-patiens.component.css']
})
export class InfoProfilePatiensComponent implements OnInit {
  patientData!: PatientEntity;
  dataSource: PatientEntity[] = [];
  displayed: string[] = ['fullName', 'age', 'phoneNumber', 'email','typeofblood'];

  constructor(
    private patientService: PatientsProfileService,
    private profileService: ProfilesService // Inject ProfilesService
  ) {}

  ngOnInit() {
    this.getPatientDetails('1'); // replace '1' with the actual patient ID
  }

  private getPatientDetails(id: string) {
    this.patientService.getPatientDetails(id).pipe(
      switchMap((patient: PatientEntity) => {
        if (patient && patient.id) { // Check if patient and patient.id are not undefined
          return this.patientService.getProfileIdByPatientId(patient.id).pipe(
            switchMap((profileId: number) => {
              return this.profileService.getProfileDetails(profileId.toString());
            }),
            map((profile: any) => {
              return {
                ...profile, // Include all profile details
                fullName: profile.fullName, // Get full name from profile data
                typeofblood: patient.typeofblood, // Get blood type from patient data
              };
            })
          );
        } else {
          return of({}); // Replace {} with a default value if needed
        }
      })
    ).subscribe((response: any) => {
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
        case 'name': return compare(a.firstName, b.firstName, isAsc);
        case 'lastname': return compare(a.lastName, b.lastName, isAsc);
        case 'email': return compare(a.email, b.email, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

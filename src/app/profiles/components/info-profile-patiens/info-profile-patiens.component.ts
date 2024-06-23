import { Component, OnInit } from '@angular/core';
import { PatientEntity } from "../../model/patient.entity";
import { PatientsProfileService } from "../../services/patients-profile.service";
import { ProfilesService } from "../../services/profiles.service"; // Import ProfilesService
import { switchMap, map } from 'rxjs/operators';
import {forkJoin, Observable, of} from "rxjs";

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
    this.getPatientDetails('1').subscribe((results: any[]) => {
      this.dataSource = results;
    });
  }

  private getPatientDetails(id: string): Observable<any[]> {
    const observables: Observable<any>[] = [];

    const observable = this.patientService.getPatientDetails(id).pipe(
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
    );

    observables.push(observable);

    return forkJoin(observables);
  }
  }

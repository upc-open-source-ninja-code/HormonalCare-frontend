import { Component, OnInit } from '@angular/core';
import { PatientEntity } from "../../model/patient.entity";
import { PatientsProfileService } from "../../services/patients-profile.service";
import { ProfilesService } from "../../services/profiles.service";

@Component({
  selector: 'app-info-profile-patiens',
  templateUrl: './info-profile-patiens.component.html',
  styleUrls: ['./info-profile-patiens.component.css']
})
export class InfoProfilePatiensComponent implements OnInit {
  patientData!: PatientEntity;
  dataSource: PatientEntity[] = [];
  displayed: string[] = ['fullName', 'age', 'phoneNumber', 'email', 'typeofblood'];

  constructor(private patientService: PatientsProfileService, private profileService: ProfilesService) {}

  ngOnInit() {
    this.getPatientDetails('1'); // replace '1' with the actual patient ID
  }

  private getPatientDetails(id: string) {
    this.patientService.getPatientDetails(id).subscribe((response: PatientEntity) => {
      this.patientData = response;
      if (this.patientData && this.patientData.id) {
        this.getProfileDetails(this.patientData.id); // Get profile details using patientId
      }
    });
  }

  private getProfileDetails(patientId: number) {
    this.patientService.getProfileIdByPatientId(patientId).subscribe((profileId: number) => {
      this.profileService.getProfileDetails(profileId.toString()).subscribe((response: any) => {
        this.patientData = {
          ...this.patientData,
          firstName: response.fullName,
          age: response.age,
          phoneNumber: response.phoneNumber,
          email: response.email
        };
        this.dataSource = [this.patientData];
      });
    });
  }
}

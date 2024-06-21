import { Component, OnInit } from '@angular/core';
import { MedicalEntity } from "../../model/medical.entity";
import { MedicalsProfileService } from "../../services/medical-profile.service";
import { ProfilesService } from "../../services/profiles.service";
import {ProfilesEntity} from "../../model/profiles.entity";

@Component({
  selector: 'app-info-profile-medicals',
  templateUrl: './info-profile-medicals.component.html',
  styleUrls: ['./info-profile-medicals.component.css']
})
export class InfoProfileMedicalsComponent implements OnInit {
  doctorData!: MedicalEntity;
  doctorProfileData!: ProfilesEntity; // Add a new property for doctor profile data
  dataSource: MedicalEntity[] = [];
  displayed: string[] = ['name', 'lastname', 'email', 'password', 'sub_speciality', 'college_number', 'fee', 'code_of_doctor'];

  constructor(private doctorService: MedicalsProfileService, private profileService: ProfilesService) {}

  ngOnInit() {
    const id = '1'; // replace '1' with the actual doctor ID
    this.getDoctorDetails(id);
    this.getDoctorProfileDetails(id); // Get doctor profile details with the same ID
  }

  private getDoctorDetails(id: string) {
    this.doctorService.getDoctorDetails(id).subscribe((response: MedicalEntity) => {
      this.doctorData = response;
      this.dataSource = [this.doctorData];
    });
  }

  private getDoctorProfileDetails(id: string) { // New method to get doctor profile details
    this.profileService.getProfileDetails(id).subscribe((response: ProfilesEntity) => {
      this.doctorProfileData = response;
      // Update dataSource with doctor profile data
      if (this.dataSource.length > 0) {
        this.dataSource[0].firstName = this.doctorProfileData.firstName;
        this.dataSource[0].lastName = this.doctorProfileData.lastName;
        this.dataSource[0].email = this.doctorProfileData.email;
      }
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
        case 'qualification': return compare(a.subSpecialty, b.subSpecialty, isAsc);
        case 'school_N': return compare(a.professionalIdentificationNumber, b.professionalIdentificationNumber, isAsc);
        case 'fee': return compare(a.appointmentFee, b.appointmentFee, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

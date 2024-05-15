import { Component, OnInit } from '@angular/core';
import { MedicalEntity } from "../../model/medical.entity";
import { MedicalsProfileService } from "../../services/medical-profile.service";

@Component({
  selector: 'app-info-profile-medicals',
  templateUrl: './info-profile-medicals.component.html',
  styleUrls: ['./info-profile-medicals.component.css']
})
export class InfoProfileMedicalsComponent implements OnInit {
  doctorData!: MedicalEntity;
  dataSource: MedicalEntity[] = [];
  displayed: string[] = ['name', 'lastname', 'email', 'password', 'sub_speciality', 'college_number', 'fee', 'code_of_doctor'];

  constructor(private doctorService: MedicalsProfileService) {}

  ngOnInit() {
    this.getDoctorDetails('1'); // replace '1' with the actual doctor ID
  }

  private getDoctorDetails(id: string) {
    this.doctorService.getDoctorDetails(id).subscribe((response: MedicalEntity) => {
      this.doctorData = response;
      this.dataSource = [this.doctorData];
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
        case 'qualification': return compare(a.sub_speciality, b.sub_speciality, isAsc);
        case 'school_N': return compare(a.college_number, b.college_number, isAsc);
        case 'fee': return compare(a.fee, b.fee, isAsc);
        case 'code_of_doctor': return compare(a.code_of_doctor, b.code_of_doctor, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

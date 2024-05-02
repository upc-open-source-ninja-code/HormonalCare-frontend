import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorViewColleagueComponent } from "../../components/doctor-view-colleague/doctor-view-colleague.component";
import { DoctorProfileService } from "../../services/doctor-profile.service";

@Component({
  selector: 'app-colleague-search',
  templateUrl: './colleague-search.component.html',
  styleUrl: './colleague-search.component.css'
})
export class ColleagueSearchComponent {
  searchEmail: string = '';

  constructor(private doctorService: DoctorProfileService, public dialog: MatDialog) { }

  search() {
    this.doctorService.searchDoctorByEmail(this.searchEmail).subscribe(doctors => {
      if (doctors && doctors.length > 0) {
        const dialogRef = this.dialog.open(DoctorViewColleagueComponent, {
          data: doctors[0] // Si solo esperas un médico como resultado, selecciona el primero
        });
      } else {
        // Manejar el caso en que no se encuentren médicos
        console.log('No se encontró ningún médico con ese correo electrónico.');
      }
    });
  }
}

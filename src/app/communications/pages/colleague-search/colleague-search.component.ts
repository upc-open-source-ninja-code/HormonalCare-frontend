import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DoctorViewColleagueComponent } from "../../components/doctor-view-colleague/doctor-view-colleague.component";
import { DoctorProfileService } from "../../services/doctor-profile.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-colleague-search',
  templateUrl: './colleague-search.component.html',
  styleUrls: ['./colleague-search.component.css']
})
export class ColleagueSearchComponent {
  searchEmail: string = '';

  constructor(private doctorService: DoctorProfileService, public dialog: MatDialog, private router: Router) { }

  search() {
    this.doctorService.searchDoctorByEmail(this.searchEmail).subscribe(doctors => {
      if (doctors && doctors.length > 0) {
        const dialogRef = this.dialog.open(DoctorViewColleagueComponent, {
          data: doctors[0]
        });

        dialogRef.componentInstance.sendMessageClicked.subscribe((email: string) => {
          this.navigateToDoctorChat(email);
        });
      } else {
        console.log('No se encontró ningún médico con ese correo electrónico.');
      }
    });
  }

  navigateToDoctorChat(email: string) {
    this.router.navigate(['/messages'], { queryParams: { doctorEmail: email } });
  }
}

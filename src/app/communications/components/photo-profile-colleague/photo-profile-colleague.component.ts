import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfile } from '../../model/doctor-profile';
@Component({
  selector: 'app-photo-profile-colleague',
  templateUrl: './photo-profile-colleague.component.html',
  styleUrl: './photo-profile-colleague.component.css',
  standalone: true
})
export class PhotoProfileColleagueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DoctorProfile) { }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfile } from '../../model/doctor-profile';

@Component({
  selector: 'app-info-profile-colleague',
  templateUrl: './info-profile-colleague.component.html',
  styleUrl: './info-profile-colleague.component.css',
  standalone: true
})
export class InfoProfileColleagueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DoctorProfile) { }
}

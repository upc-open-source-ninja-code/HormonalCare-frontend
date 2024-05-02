import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfile } from '../../model/doctor-profile';

@Component({
  selector: 'app-titles-profile-colleague',
  templateUrl: './titles-profile-colleague.component.html',
  styleUrl: './titles-profile-colleague.component.css',
  standalone: true
})
export class TitlesProfileColleagueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DoctorProfile) { }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorProfile } from '../../model/doctor-profile';
import {PhotoProfileColleagueComponent} from "../photo-profile-colleague/photo-profile-colleague.component";
import {InfoProfileColleagueComponent} from "../info-profile-colleague/info-profile-colleague.component";
import {TitlesProfileColleagueComponent} from "../titles-profile-colleague/titles-profile-colleague.component";
import {ButtonSendMessageComponent} from "../button-send-message/button-send-message.component";
import {
  DatepickerProfileColleagueComponent
} from "../datepicker-profile-colleague/datepicker-profile-colleague.component";
import {
  HourpickerProfileColleagueComponent
} from "../hourpicker-profile-colleague/hourpicker-profile-colleague.component";
import {SpaceAssignPatientComponent} from "../space-assign-patient/space-assign-patient.component";
import {ButtonSaveScheduleComponent} from "../button-save-schedule/button-save-schedule.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-doctor-view-colleague',
  templateUrl: './doctor-view-colleague.component.html',
  styleUrl: './doctor-view-colleague.component.css',
  imports: [
    PhotoProfileColleagueComponent,
    InfoProfileColleagueComponent,
    TitlesProfileColleagueComponent,
    ButtonSendMessageComponent,
    DatepickerProfileColleagueComponent,
    HourpickerProfileColleagueComponent,
    SpaceAssignPatientComponent,
    ButtonSaveScheduleComponent,
    MatGridTile,
    MatGridList,
    MatButtonModule, MatDialogModule
  ],
  standalone: true
})
export class DoctorViewColleagueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DoctorProfile) { }
}



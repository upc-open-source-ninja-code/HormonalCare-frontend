import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-hourpicker-profile-colleague',
  templateUrl: './hourpicker-profile-colleague.component.html',
  styleUrl: './hourpicker-profile-colleague.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
})
export class HourpickerProfileColleagueComponent {

}

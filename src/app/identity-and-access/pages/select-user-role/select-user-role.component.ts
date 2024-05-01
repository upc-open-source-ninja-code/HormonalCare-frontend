// src/app/select-user-role/select-user-role.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-select-user-role',
  templateUrl: './select-user-role.component.html',
  styleUrls: ['./select-user-role.component.css']
})
export class SelectUserRoleComponent {
  optionRoles = [
    { path: '/header-patient', title: 'Patient', icon: 'assets/images/doctor-icon.png'},
    { path: '/header-doctor', title: 'Endocrinologist', icon: 'assets/images/patient-icon.png'},

  ]
}

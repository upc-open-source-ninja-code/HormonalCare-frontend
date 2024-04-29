import { Component } from '@angular/core';

@Component({
  selector: 'app-header-doctor',
  templateUrl: './header-doctor.component.html',
  styleUrl: './header-doctor.component.css'
})
export class HeaderDoctorComponent {
  options = [
    { path: '/homeDoctor', title: 'Home'},
    { path: '/calendar', title: 'Calendar'},
    { path: '/messages', title: 'Messages'},
    { path: '/notifications', title: 'Notifications'},
    { path: '/doctorProfile', title: 'Profile'},
  ]
}

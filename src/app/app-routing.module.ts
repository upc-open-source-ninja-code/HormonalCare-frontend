import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './identity-and-access/pages/sign-in/sign-in.component';
import { SignUpComponent } from './identity-and-access/pages/sign-up/sign-up.component';
import { DoctorRegistrationComponent } from './identity-and-access/pages/doctor-registration/doctor-registration.component';
import { PatientRegistrationComponent } from './identity-and-access/pages/patient-registration/patient-registration.component';
import { HomeDoctorComponent } from './appointment/pages/home-doctor/home-doctor.component';
import { PatientsDoctorComponent } from './profiles/pages/doctor/patients-doctor/patients-doctor.component';
import { ScheduleDoctorComponent } from './appointment/pages/schedule-doctor/schedule-doctor.component';
import { DoctorProfileComponent } from './profiles/pages/doctor/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './profiles/pages/patient/patient-profile/patient-profile.component';
import { HomePatientComponent } from './profiles/pages/patient/home-patient/home-patient.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'doctor-registration', component: DoctorRegistrationComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: 'home-doctor', component: HomeDoctorComponent },
  { path: 'patients-doctor', component: PatientsDoctorComponent },
  { path: 'schedule-doctor', component: ScheduleDoctorComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'patient-profile', component: PatientProfileComponent },
  { path: 'home-patient', component: HomePatientComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

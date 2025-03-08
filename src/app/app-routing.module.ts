import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './identity-and-access/pages/sign-in/sign-in.component';
import { SignUpComponent } from './identity-and-access/pages/sign-up/sign-up.component';
import { DoctorRegistrationComponent } from './identity-and-access/pages/doctor-registration/doctor-registration.component';
import { PatientRegistrationComponent } from './identity-and-access/pages/patient-registration/patient-registration.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'doctor-registration', component: DoctorRegistrationComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' } // Redirige a sign-in por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

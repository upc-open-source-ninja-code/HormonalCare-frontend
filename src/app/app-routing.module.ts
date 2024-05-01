import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarViewComponent} from "./calendar/pages/calendar-view/calendar-view.component";
import {DoctorChatComponent} from "./communications/pages/doctor-chat/doctor-chat.component";
import {NotificationsViewComponent} from "./notifications/pages/notifications-view/notifications-view.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DoctorProfileComponent} from "./profiles/pages/doctor-profile/doctor-profile.component";
import {HomeDoctorComponent} from "./profiles/pages/home-doctor/home-doctor.component";
import {HomePatientComponent} from "./profiles/pages/home-patient/home-patient.component";
import {CalendarPatientComponent} from "./calendar/pages/calendar-patient/calendar-patient.component";
import {PatientChatComponent} from "./communications/pages/patient-chat/patient-chat.component";
import {NotificationsPatientsComponent} from "./notifications/pages/notifications-patients/notifications-patients.component";
import {PatientProfileComponent} from "./profiles/pages/patient-profile/patient-profile.component";
import {SelectUserRoleComponent} from "./identity-and-access/pages/select-user-role/select-user-role.component";
import {HeaderDoctorComponent} from "./shared/pages/header-doctor/header-doctor.component";
import {HeaderPatientComponent} from "./shared/pages/header-patient/header-patient.component";
import { ReasonconsultationComponent } from './medical-history/components/reasonconsultation/reasonconsultation.component';
import { BackgroundComponent } from './medical-history/components/background/background.component';
import { MedicalexamsComponent } from './medical-history/components/medicalexams/medicalexams.component';
import { ExternalreportsComponent } from './medical-history/components/externalreports/externalreports.component';
import { DignosesandtreatmentComponent } from './medical-history/components/dignosesandtreatment/dignosesandtreatment.component';

const routes: Routes = [

  { path: 'selectRole', component: SelectUserRoleComponent },
  //{ path: 'headerDoctor', component: HeaderDoctorComponent },
 // { path: 'headerPatient', component: HeaderPatientComponent },
  { path: 'homeDoctor', component: HomeDoctorComponent },
  { path: 'homePatient', component: HomePatientComponent },
  { path: 'calendar', component: CalendarViewComponent },
  { path: 'messages', component: DoctorChatComponent },
  { path: 'notifications', component: NotificationsViewComponent },
  { path: 'doctorProfile', component:DoctorProfileComponent  },
  { path: 'calendarPatient', component: CalendarPatientComponent },
  { path: 'messagesPatient', component: PatientChatComponent },
  { path: 'notificationsPatient', component: NotificationsPatientsComponent },
  { path: 'patientProfile', component: PatientProfileComponent },

  { path: 'reasonConsultation', component: ReasonconsultationComponent },
  { path: 'background', component: BackgroundComponent },
  { path: 'medicalExams', component: MedicalexamsComponent },
  { path: 'externalReports', component: ExternalreportsComponent },
  { path: 'dignosesAndTreatment', component: DignosesandtreatmentComponent },
  { path: '', redirectTo: 'selectRole', pathMatch: 'full'},

  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

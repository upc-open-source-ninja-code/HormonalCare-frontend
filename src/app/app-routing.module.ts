import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarViewComponent} from "./calendar/pages/calendar-view/calendar-view.component";
import {DoctorChatComponent} from "./communications/pages/doctor-chat/doctor-chat.component";
import {NotificationsViewComponent} from "./notifications/pages/notifications-view/notifications-view.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DoctorProfileComponent} from "./profiles/pages/doctor-profile/doctor-profile.component";
import {HomeDoctorComponent} from "./shared/pages/home-doctor/home-doctor.component";

const routes: Routes = [
  { path: 'homeDoctor', component: HomeDoctorComponent },
  { path: 'calendar', component: CalendarViewComponent },
  { path: 'messages', component: DoctorChatComponent },
  { path: 'notifications', component: NotificationsViewComponent },
  { path: 'doctorProfile', component:DoctorProfileComponent  },
  { path: '', redirectTo: 'homeDoctor', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

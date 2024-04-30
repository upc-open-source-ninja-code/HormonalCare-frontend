import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { PatientsTableComponent } from './profiles/components/patients-table/patients-table.component';
import { SearchDoctorsComponent } from './shared/pages/search-doctors/search-doctors.component';
import { SearchPatiensComponent } from './profiles/components/search-patiens/search-patiens.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import { HeaderDoctorComponent } from './shared/pages/header-doctor/header-doctor.component';
import {NgOptimizedImage} from "@angular/common";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {LanguageSwitcherComponent} from "./shared/pages/language-switcher/language-switcher.component";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

import { DoctorChatComponent } from './communications/pages/doctor-chat/doctor-chat.component';
import { PatientChatComponent } from './communications/pages/patient-chat/patient-chat.component';
import { NotificationsViewComponent } from './notifications/pages/notifications-view/notifications-view.component';
import {CalendarViewComponent} from "./calendar/pages/calendar-view/calendar-view.component";
import { DoctorProfileComponent } from './profiles/pages/doctor-profile/doctor-profile.component';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {PatientsAppointmentsEntity} from "./profiles/model/patients-appointments.entity";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import { HomeDoctorComponent } from './shared/pages/home-doctor/home-doctor.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSort} from "@angular/material/sort";
import { SelectUserRoleComponent } from './identity-and-access/pages/select-user-role/select-user-role.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    PatientsTableComponent,
    SearchDoctorsComponent,
    SearchPatiensComponent,
    HeaderDoctorComponent,
    LanguageSwitcherComponent,
    CalendarViewComponent,
    DoctorChatComponent,
    PatientChatComponent,
    NotificationsViewComponent,
    DoctorProfileComponent,
    HomeDoctorComponent,
    SelectUserRoleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbar,
    MatIcon,
    NgOptimizedImage,
    MatSidenav,
    MatSidenavContainer,
    MatIconButton,
    MatSidenavContent,
    /*
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    */
    MatButtonToggleGroup,
    MatButtonToggle,
    MatAnchor,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatPaginator,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatSort,

  ],
  providers: [
  provideAnimationsAsync(),
    PatientsAppointmentsEntity
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

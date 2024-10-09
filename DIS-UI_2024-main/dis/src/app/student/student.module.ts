import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';

import { StudentRoutingModule } from './student-routing.module';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { StudentComponent } from './student.component';
import { EventFetchComponent } from './event/event-fetch/event-fetch.component';
// import { NavbarComponent } from '../components/navbar/navbar.component';
// import { FooterComponent } from '../components/footer/footer.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AddDetailComponent } from './profile/add-detail/add-detail.component';
//import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    EventComponent,
    EventFormComponent,
    StudentComponent,
    DashboardComponent,
    EventFetchComponent,
    EventDetailComponent,
    EventListComponent,
    ProfileComponent,
    AddDetailComponent

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MaterialModule,
    FullCalendarModule
  ]
})
export class StudentModule { }

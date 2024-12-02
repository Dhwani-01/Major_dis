import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ReactiveFormsModule } from '@angular/forms';

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
// import { ProfileComponent } from './profile/profile.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AddDetailComponent } from './profile/add-detail/add-detail.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { DisPyqComponent } from './dis-pyq/dis-pyq.component';
import { PYQComponent } from './dis-pyq/pyq/pyq.component';
import { AddCompanyFormComponent } from './placement/addCompanyForm/addCompanyForm.component';
import { AddQuestionComponent } from './placement/addQuestion/addQuestion.component';
import { CardPageComponent } from './placement/card-page/card-page.component';
import { CardComponent } from './placement/card/card.component';
import { QuestionListComponent } from './placement/question-list/question-list.component';
import { TopicListComponent } from './placement/topic-list/topic-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventComponent,
    EventFormComponent,
    StudentComponent,
    DashboardComponent,
    EventFetchComponent,
    EventDetailComponent,
    EventListComponent,
    DisPyqComponent,
    PYQComponent,
    ProfileComponent,
    AddDetailComponent,
    EditProfileComponent,
    AddCompanyFormComponent,
    AddQuestionComponent,
    CardComponent,
    CardPageComponent,
    QuestionListComponent,
    TopicListComponent

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    MaterialModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }

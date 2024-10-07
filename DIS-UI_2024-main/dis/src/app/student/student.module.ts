import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { StudentComponent } from './student.component';
// import { NavbarComponent } from '../components/navbar/navbar.component';
// import { FooterComponent } from '../components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EventComponent,
    EventFormComponent,
    StudentComponent,

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }

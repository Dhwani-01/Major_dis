import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event/event-form/event-form.component';


@NgModule({
  declarations: [
    EventComponent,
    EventFormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }

// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { PYQComponent } from './pyq/pyq.component';
import { UploadPyqComponent } from './upload-pyq/upload-pyq.component';
import { AllEventsComponent } from './all-events/all-events.component'; 
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'infrastructure', component: InfrastructureComponent },
  { path: 'pyq', component: PYQComponent },
  { path: 'upload_pyq', component: UploadPyqComponent },
  { path: 'all-events', component: AllEventsComponent } ,
  { path: 'event/:name', component: EventDetailComponent },
  { path: 'event/list/try', component: EventListComponent},
  { path: 'event/form/admin', component: EventFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

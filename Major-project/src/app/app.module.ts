import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { PYQComponent } from './pyq/pyq.component';
import { UploadPyqComponent } from './upload-pyq/upload-pyq.component';
import { AllEventsComponent } from './all-events/all-events.component'; 
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventFetchComponent } from './event-fetch/event-fetch.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';

import { EventService } from './event.service'; 
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfrastructureComponent,
    PYQComponent,
    UploadPyqComponent,
    AllEventsComponent,
    EventDetailComponent,
    EventListComponent,
    EventFormComponent,
    EventFetchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'infrastructure', component: InfrastructureComponent },
      { path: 'pyq', component: PYQComponent },
      { path: 'upload_pyq', component: UploadPyqComponent },
      {path: 'all-events' , component:AllEventsComponent},
      {path: 'event/:name', component:EventDetailComponent},
      {path: 'event/list/try', component:EventListComponent},
      { path: 'event/form/admin', component:EventFormComponent},
      { path: 'event-fetch', component:EventFetchComponent}
    ])
  ],
  providers: [
    EventService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

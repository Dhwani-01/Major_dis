// import { Component } from '@angular/core';


import { Component, OnInit } from '@angular/core';
// import { EventService } from '../services/event.service';
// import { EventService } from 'src/app/services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EventformService } from 'src/app/services/eventform.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';


@Component({
  selector: 'app-event-upcoming',
  templateUrl: './event-upcoming.component.html',
  styleUrls: ['./event-upcoming.component.scss']
})
export class EventUpcomingComponent {

  upcomingEvents: any[] = [];
  username: string = '';
  onStatus: any;
  params: any;
  status: string = 'upcoming'; // Example: Change to the desired status dynamically

  constructor(private eventformService: EventformService,private dialog: MatDialog,private authService: AuthService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername()|| '';
      this.getEventsByStatus(this.status);
  }

  agInit(params: any): void {
    this.params = params;
    this.onStatus = this.params.onStatus;
  }

  getEventsByStatus(status: string): void {
      this.eventformService.getEventsByStatus(status,this.username).subscribe((data) => {
          this.upcomingEvents = data;
          console.log(data);
      });
  }

  onEditEvent(event: any) {
    console.log('Edit event:', event);
    const dialogRef = this.dialog.open(EventEditDialogComponent, {
      data: {
        status: 'completed',
      },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Updated event:', result);
        // Optionally refresh the event list after editing
        // this.fetchCompletedEvents();
        // this.fetchOngoingEvents();
        this.getEventsByStatus('upcoming');
      }
    });
  }
  
onDeleteEvent(eventId: number) {
  console.log(eventId);
  if (confirm('Are you sure you want to delete this event?')) {
    this.eventformService.deleteEvent(eventId).subscribe({
      next: () => {
        alert('Event deleted successfully!');
        this.getEventsByStatus('upcoming'); // Refresh the events list
      },
      error: (err) => {
        console.error('Error deleting event:', err);
        alert('Failed to delete the event.');
      }
    });
  }
}

// onStatusClick(event: any) {
//   console.log(event);
//   this.onStatus(this.params.data);
//   try {
    

//   } catch (e) {
//     console.log(e);
//   }
// }

onStatusCompleted(data:any) {

  console.log('on status completed clicked');
  // alert(rowData);
  const dialogRef = this.dialog.open(EventEditDialogComponent, {
    data: {
      // type: 'status',
       data : data,
      status:'completed'
    },
    disableClose: true,
  });
  dialogRef.afterClosed().subscribe(() => this.getEventsByStatus('upcoming'));

}


onStatusUpcoming(data:any) {

  console.log('on status upcoming clicked');
  // alert(rowData);
  const dialogRef = this.dialog.open(EventEditDialogComponent, {
    data: {
      // type: 'status',
       data : data,
      status:'upcoming'
    },
    disableClose: true,
  });
  dialogRef.afterClosed().subscribe(() => this.getEventsByStatus('upcoming'));

}

onStatusOngoing(data:any) {

  console.log('on status ongoing clicked');
  // alert(rowData);
  const dialogRef = this.dialog.open(EventEditDialogComponent, {
    data: {
      // type: 'status',
      data : data,
      status:'ongoing'
    },
    disableClose: true,
  });
  dialogRef.afterClosed().subscribe(() => this.getEventsByStatus('upcoming'));

}

}

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
  selector: 'app-event-ongoing',
  templateUrl: './event-ongoing.component.html',
  styleUrls: ['./event-ongoing.component.scss']
})
export class EventOngoingComponent implements OnInit {

    ongoingEvents: any[] = [];
    username: string = '';
    status: string = 'ongoing';
    // username = 'ntiwari'; // Replace with dynamic username
    // loginId = 'facultyLoginId'; // Replace with dynamic login ID

    constructor(private eventformService: EventformService,private authService: AuthService,private dialog: MatDialog) { }

    ngOnInit(): void {
        this.username = this.authService.getUsername()|| '';
        this.getEventsByStatus(this.status)
        // this.fetchCompletedEvents();
        // this.fetchOngoingEvents();
    }
    
//   fetchCompletedEvents() {
//     this.eventformService.getCompletedEvents(this.username).subscribe((data) => {
//       console.log("data",data);
//         this.completedEvents = data;
//     });
// }

getEventsByStatus(status: string): void {
  this.eventformService.getEventsByStatus(status,this.username).subscribe((data) => {
      this.ongoingEvents = data;
      console.log(data);
  });
}

// fetchOngoingEvents() {
//   this.eventService.getOngoingEvents(this.username).subscribe((data) => {
//       this.ongoingEvents = data;
//   });
// }

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
    }
  });
}

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
  dialogRef.afterClosed().subscribe(() => this.getEventsByStatus('ongoing'));

}

onDeleteEvent(eventId: number) {
  console.log(eventId);
  if (confirm('Are you sure you want to delete this event?')) {
    this.eventformService.deleteEvent(eventId).subscribe({
      next: () => {
        alert('Event deleted successfully!');
        // this.fetchCompletedEvents(); // Refresh the events list
      },
      error: (err) => {
        console.error('Error deleting event:', err);
        alert('Failed to delete the event.');
      }
    });
  }
}

  

}

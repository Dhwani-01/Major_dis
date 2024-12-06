// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-event-completed',
//   templateUrl: './event-completed.component.html',
//   styleUrls: ['./event-completed.component.scss']
// })
// export class EventCompletedComponent {

// }
import { Component, OnInit } from '@angular/core';
// import { EventService } from '../services/event.service';
// import { EventService } from 'src/app/services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EventformService } from 'src/app/services/eventform.service';
import { AuthService } from 'src/app/services/auth.service';
import { EventEditDialogComponent } from '../event-edit-dialog/event-edit-dialog.component';

@Component({
  selector: 'app-event-completed',
  templateUrl: './event-completed.component.html',
  styleUrls: ['./event-completed.component.scss']
})
export class EventCompletedComponent implements OnInit{

  completedEvents: any[] = [];
    ongoingEvents: any[] = [];
    username: string = '';
    // username = 'ntiwari'; // Replace with dynamic username
    // loginId = 'facultyLoginId'; // Replace with dynamic login ID

    constructor(private eventService: EventformService,private authService: AuthService,private dialog: MatDialog) { }

    ngOnInit(): void {
        this.username = this.authService.getUsername()|| '';
        this.fetchCompletedEvents();
        this.fetchOngoingEvents();
    }
    
  fetchCompletedEvents() {
    this.eventService.getCompletedEvents(this.username).subscribe((data) => {
      console.log("data",data);
        this.completedEvents = data;
    });
}

fetchOngoingEvents() {
  this.eventService.getOngoingEvents(this.username).subscribe((data) => {
      this.ongoingEvents = data;
  });
}

onEditEvent(event: any) {
  console.log('Edit event:', event);
  const dialogRef = this.dialog.open(EventEditDialogComponent, {
    data: event
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      console.log('Updated event:', result);
      // Optionally refresh the event list after editing
      this.fetchCompletedEvents();
      this.fetchOngoingEvents();
    }
  });
}

onDeleteEvent(eventId: number) {
  console.log(eventId);
  if (confirm('Are you sure you want to delete this event?')) {
    this.eventService.deleteEvent(eventId).subscribe({
      next: () => {
        alert('Event deleted successfully!');
        this.fetchCompletedEvents(); // Refresh the events list
      },
      error: (err) => {
        console.error('Error deleting event:', err);
        alert('Failed to delete the event.');
      }
    });
  }
}

}

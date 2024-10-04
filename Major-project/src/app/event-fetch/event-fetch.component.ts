// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-event-fetch',
//   standalone: true,
//   imports: [],
//   templateUrl: './event-fetch.component.html',
//   styleUrl: './event-fetch.component.css'
// })
// export class EventFetchComponent {

// }

import { Component, OnInit } from '@angular/core';
import { EventformService } from '../eventform.service';  // Import the service

@Component({
  selector: 'app-event-fetch',
  templateUrl: './event-fetch.component.html',
  styleUrls: ['./event-fetch.component.css']
})
export class EventFetchComponent implements OnInit {
  eventDetails: any[] = [];  // To store event details

  constructor(private eventformService: EventformService) { }

  ngOnInit(): void {
    this.loadEventDetails();
  }

  // Method to load event details from the backend
  loadEventDetails() {
    this.eventformService.getEventDetails().subscribe(
      (data) => {
        this.eventDetails = data;
        console.log('Event Details:', this.eventDetails);
      },
      (error) => {
        console.error('Error fetching event details:', error);
      }
    );
  }
}

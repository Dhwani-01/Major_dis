// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-event-fetch',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './event-fetch.component.html',
// //   styleUrl: './event-fetch.component.css'
// // })
// // export class EventFetchComponent {

// // }

// import { Component, OnInit } from '@angular/core';
// import { EventformService } from 'src/app/services/eventform.service';

// @Component({
//   selector: 'app-event-fetch',
//   templateUrl: './event-fetch.component.html',
//   styleUrls: ['./event-fetch.component.css']
// })
// export class EventFetchComponent implements OnInit {
//   eventDetails: any[] = [];  // To store event details
  

//   constructor(private eventformService: EventformService) { }

//   ngOnInit(): void {
//     this.loadEventDetails();
//   }

//   // Method to load event details from the backend
//   loadEventDetails() {
//     this.eventformService.getEventDetails().subscribe(
//       (data) => {
//         this.eventDetails = data;
//         console.log('Event Details:', this.eventDetails);
//       },
//       (error) => {
//         console.error('Error fetching event details:', error);
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { EventformService } from 'src/app/services/eventform.service';

@Component({
  selector: 'app-event-fetch',
  templateUrl: './event-fetch.component.html',
  styleUrls: ['./event-fetch.component.css']
})
export class EventFetchComponent implements OnInit {
  eventDetails: any[] = []; // To store all event details
  completedEvents: any[] = []; // To store completed events
  ongoingEvents: any[] = []; // To store ongoing events
  upcomingEvents: any[] = []; // To store upcoming events

  selectedTab = 0; // Default tab (0: Completed, 1: Ongoing, 2: Upcoming)

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
        this.categorizeEvents();
      },
      (error) => {
        console.error('Error fetching event details:', error);
      }
    );
  }

  // Method to categorize events into completed, ongoing, and upcoming
  categorizeEvents() {
    const currentDate = new Date();
    this.completedEvents = this.eventDetails.filter(event => new Date(event.date) < currentDate);
    this.ongoingEvents = this.eventDetails.filter(event => new Date(event.date).toDateString() === currentDate.toDateString());
    this.upcomingEvents = this.eventDetails.filter(event => new Date(event.date) > currentDate);
  }

  // Method to switch between tabs
  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  // Method to navigate to event details page (for demonstration purposes)
  goToEventDetail(eventName: string) {
    console.log('Navigating to event details for:', eventName);
    // Add navigation logic here, e.g., router navigation
  }
}

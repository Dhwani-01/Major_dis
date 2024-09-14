// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-event-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './event-list.component.html',
//   styleUrl: './event-list.component.css'
// })
// export class EventListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    // this.eventService.getEvents().subscribe(data => {
    //   this.events = data;
    // });
    this.eventService.getEvents().subscribe({
      next: (data) => {
        console.log('Received data:', data); // Log the received data
        this.events = data;
      },
      error: (error) => {
        console.error('Error fetching events:', error); // Log any errors
      },
      complete: () => {
        console.log('Event fetching complete');
      }
    });
  }
}

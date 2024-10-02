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

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'active-status';
      case 'Upcoming':
        return 'upcoming-status';
      case 'Completed':
        return 'completed-status';
      default:
        return '';
    }
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
  // downloadCertificate(certificatePath: string): void {
  //   window.open(`http://localhost:5000/event/download-certificate/${certificatePath}`, '_blank');
  // }
  // downloadCertificate(eventName: string): void {
  //   const downloadUrl = `http://localhost:5000/event/download-certificate/${encodeURIComponent(eventName)}`;
  //   window.open(downloadUrl, '_blank');
  // }
   // Extract the last part of the path (the file name)
   extractFileName(filePath: string | undefined): string {
    return filePath ? filePath.split('/').pop() || '' : '';
  }

  // Method to download the certificate based on extracted file name
  downloadCertificate(fileName: string | undefined): void {
    if (!fileName) {
      console.error('No certificate available for download');
      return;
    }
    
    const downloadUrl = `http://localhost:8080/event/download-certificate/${fileName}`;
    window.open(downloadUrl, '_blank');
  }
  
}

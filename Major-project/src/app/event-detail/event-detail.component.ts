
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any = {
    photoUrl: 'assets/images/Codiction.png',
    name: 'Codiction 3.0',
    date: '2024-09-15',
    time: '14:00',
    venue: 'Main Auditorium',
    description: 'A major event for coding enthusiasts.',
    coordinator: 'John Doe',
    registrationCount: 150,
    images: [
      'assets/images/codiction1.png',
      'assets/images/codiction2.png',
      'assets/images/codiction3.png'
    ]
  };

  eventName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventName = this.route.snapshot.paramMap.get('name');
    // Use this.eventName to fetch and display event details
  }
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.eventName = params.get('name');
  //     // Load event details based on the eventName
  //   });
  // }
  // ngOnInit(): void {
  //   const encodedName = this.route.snapshot.paramMap.get('name');
  //   this.eventName = decodeURIComponent(encodedName ?? '');
  //   console.log(this.eventName); // Check if the eventName is correctly decoded
  //   // Use this.eventName to fetch and display event details
  // }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {
  selectedTab: number = 0;

  events = [
    { 
      date: '2022-03-27', 
      name: 'Codiction', 
      status: 'completed',
      imageUrl: 'assets/images/Codiction.png',
      description: ' Flagship coding contest of computer club conducted on Codechef.'
    },
    { 
      date: '2022-06-24', 
      name: 'Heuristic', 
      status: 'completed',
      imageUrl: 'assets/images/Heuristic.png',
      description: 'A 2 round coding contest where coders from all over Indore compete for in-hand cash prizes and amazing opportunities'
    },
    { 
      date: ' 2024-02-16', 
      name: 'Web3', 
      status: 'completed',
      imageUrl: 'assets/images/Web3.png',
      description: 'Organized 3-hour hands-on Web3 session where participants explored Inco networks with Metamask, discovered QONEQTs innovative social media solutions, and learned to seamlessly convert currencies using Router Nitro.'
    }
  ];

  ngOnInit() {
    console.log('Completed Events:', this.completedEvents); // Log completed events
  }

  get completedEvents() {
    return this.events.filter(event => event.status === 'completed');
  }

  selectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
  }
  
  constructor(private router: Router) {}

  goToEventDetail(name: string): void {
    console.log(name); // Ensure name is printed correctly
  this.router.navigate([`/event/${name}`]); 
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedTab: number = 0;

  // Inject Router into the component
  constructor(private router: Router) {}

  // Method to set the selected tab
  selectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
  }

  events = [
    { date: '2024-08-29', name: 'Angular Workshop' },
    { date: '2024-09-10', name: 'React Workshop' },
    { date: '2024-10-05', name: 'Web Development Workshop' }
  ];

  onTabClick() {
    console.log('Events tab selected');
    // Any additional logic you want to add
  }

  viewAllEvents(): void {
    this.router.navigate(['/all-events']);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventformService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventformService {
  private baseUrl = 'http://localhost:8085/api/event_detail'; // Adjust base URL if needed

  constructor(private http: HttpClient) { }

  // Method to post event form data
  createEvent(eventData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, eventData);
  }

  getEventDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

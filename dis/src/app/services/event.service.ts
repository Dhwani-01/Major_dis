// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {

//   constructor() { }
// }



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {
//   private baseUrl = 'http://localhost:8083/event'; // Adjust base URL if needed

//   constructor(private http: HttpClient) { }

//   getEvents(): Observable<any> {
//     return this.http.get(`${this.baseUrl}`);
//   }

  
//   // getEventById(id: number): Observable<any> {
//   //   return this.http.get(`${this.baseUrl}/${id}`);
//   // }

//   // createEvent(event: any): Observable<any> {
//   //   return this.http.post(`${this.baseUrl}`, event);
//   // }

//   // updateEvent(id: number, event: any): Observable<any> {
//   //   return this.http.put(`${this.baseUrl}/${id}`, event);
//   // }

//   // deleteEvent(id: number): Observable<any> {
//   //   return this.http.delete(`${this.baseUrl}/${id}`);
//   // }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serviceUrls } from '../shared/constants/serviceUrls';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 // private baseUrl = 'http://localhost:8083/event'; // Adjust base URL if needed
  private baseUrl = serviceUrls.getEvent;

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // getCompletedEvents(username: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/completed`, { params: { username } });
  // }

  // getOngoingEvents(username: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/ongoing`, { params: { username } });
  // }
  
  // getEventById(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  // createEvent(event: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}`, event);
  // }

  // updateEvent(id: number, event: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${id}`, event);
  // }

  // deleteEvent(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`);
  // }
}


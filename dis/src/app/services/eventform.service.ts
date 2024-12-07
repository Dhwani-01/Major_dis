// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventformService {

//   constructor() { }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventformService {
//   private baseUrl = 'http://localhost:8083/api/event_detail'; // Adjust base URL if needed

//   constructor(private http: HttpClient) { }

//   // Method to post event form data
//   // createEvent(eventData: FormData): Observable<any> {
//   //   console.log("csz",eventData);
//   //   return this.http.post(`${this.baseUrl}`, eventData);
//   // }

//   createEvent(eventData: FormData): Observable<any> {
//     console.log("csz FormData content:");
//     eventData.forEach((value, key) => {
//         console.log(`${key}: ${value}`);
//     });
//     return this.http.post(`${this.baseUrl}`, eventData);
// }


//   getEventDetails(): Observable<any> {
//     return this.http.get(`${this.baseUrl}`);
//   }

//   // getEventByName(eventName: string): Observable<any> {
//   //   return this.http.get(`${this.baseUrl}/events?name=${eventName}`); // Adjust the endpoint based on your API
//   // }

//   getEventByName(eventName: string): Observable<any> {
//     const encodedName = encodeURIComponent(eventName); // Encode the event name
//     return this.http.get(`${this.baseUrl}/events?name=${encodedName}`);
//   }
  
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serviceUrls } from '../shared/constants/serviceUrls';

@Injectable({
  providedIn: 'root'
})
export class EventformService {
  //private baseUrl = 'http://localhost:8083/api/event_detail'; // Adjust base URL if needed
  private baseUrl = serviceUrls.eventDetails;

  constructor(private http: HttpClient) { }

  // Method to post event form data
  // createEvent(eventData: FormData): Observable<any> {
  //   console.log("csz",eventData);
  //   return this.http.post(`${this.baseUrl}`, eventData);
  // }

  createEvent(eventData: FormData): Observable<any> {
    // console.log("csz FormData content:");
    // eventData.forEach((value, key) => {
    //     console.log(`${key}: ${value}`);
    // });
    return this.http.post(`${this.baseUrl}`, eventData);
}


  getEventDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // getEventByName(eventName: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/events?name=${eventName}`); // Adjust the endpoint based on your API
  // }

  getEventByName(eventName: string): Observable<any> {
    const encodedName = encodeURIComponent(eventName); // Encode the event name
    return this.http.get(`${this.baseUrl}/events?name=${encodedName}`);
  }
  
  getCompletedEvents(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/completed`, { params: { username } });
  }

  getOngoingEvents(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/ongoing`, { params: { username } });
  }
  updateEvent(eventId: number, eventData: any) {
    return this.http.put(`${this.baseUrl}/${eventId}`, eventData);
  }
  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventId}`);
  }
  getEventsByStatus(status: string, username:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/status/${status}`, { params: { username } });
  }
  updateEventStatus(eventId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/${eventId}/status`;
    return this.http.put(url, null, { params: { status }, responseType: 'text' });
  }
}




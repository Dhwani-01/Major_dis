import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Student model outside of the service class
export interface Student {
  name: string;
  branch: string;
  enrollment: string;
  yearOfAdmission: number;
  dateOfBirth: string;  // Use 'string' to handle input data easily
  mobileNo: string;
  skills?: string;
  extracurricularActivities?: string;
  specification?: string;
  course?: string;
  profilePicture?: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8082/api/students';  // Adjust the backend URL if necessary

  constructor(private http: HttpClient) {}

  // Fetch all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  // Fetch a student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`); // Make sure this matches the backend
  }

  // Fetch a student by enrollment number
  getStudentByEnrollment(enrollment: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/enrollment/${enrollment}`);
  }

  // Add details to a student
  addStudentDetails(studentId: number, studentDetails: any): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/add-detail/${studentId}`, studentDetails);
  }

  // Uncomment the following methods as needed

  // Save a new student
  // createStudent(student: Student): Observable<Student> {
  //   return this.http.post<Student>(this.baseUrl, student);
  // }

  // Update an existing student
  // updateStudent(id: number, student: Student): Observable<Student> {
  //   return this.http.put<Student>(`${this.baseUrl}/${id}`, student);
  // }

  // Delete a student by ID
  // deleteStudent(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/${id}`);
  // }
}

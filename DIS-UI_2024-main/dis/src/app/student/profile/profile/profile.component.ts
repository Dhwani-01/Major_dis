// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class ProfileComponent {

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service'; 

export interface Student {
  name: string;
  branch: string;
  enrollment: string;
  yearOfAdmission: number;
  dateOfBirth: string; // Use 'string' to handle input data easily
  mobileNo: string;
  skills?: string;
  extracurricularActivities?: string;
  specification?: string;
  course?: string;
  profilePicture?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // Skills array for dropdown
  skillsControl = new FormControl();

  // List of all available skills
  skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'C++', 'SQL', 'OOP'];

  // List of selected skills
  selectedSkills: string[] = [];

  // To hold the fetched student data
  student: Student | null = null;

  // Injecting the StudentService to fetch data
  constructor(private studentService: StudentService, private router: Router) {}

  // Lifecycle hook to initialize the component and fetch student data
  ngOnInit(): void {
    this.fetchStudentData();
  }

  // Method to fetch the student data by ID (you can adjust the ID value as needed)
  fetchStudentData() {
    const studentId = 1; // Example ID, replace with your actual logic
    this.studentService.getStudentById(studentId).subscribe({
      next: (data: Student) => {
        console.log(data); // Handle the student data
        this.student = { ...data };
        // Initialize selected skills from student data
        this.selectedSkills = this.student.skills ? this.student.skills.split(', ') : [];
        // Initialize specification and extracurricular activities if they are null
        this.student.specification = this.student.specification || '';
        this.student.extracurricularActivities = this.student.extracurricularActivities || '';
      },
      error: (error) => {
        console.error('Error fetching student data:', error);
      },
      complete: () => {
        console.log('Data fetching completed.');
      }
    });
  }

  // Handler for removing a skill from the selected list
  removeSkill(skill: string): void {
    this.selectedSkills = this.selectedSkills.filter((s) => s !== skill);
  }

  // Placeholder method for changing profile picture
  changeProfilePicture(): void {
    // Logic to change profile picture
  }

  appendedText: string = '';

  changeSpecification(event: Event): void {
    const inputEvent = event as InputEvent;
    if (this.student) {
      if (this.student.specification === null) {
        this.student.specification = ''; // Initialize if null
      }
      if (inputEvent.data) {
        this.student.specification += inputEvent.data; // Append data
      }
    }
    console.log(this.student);
  }

  changeExtracurricular(event: Event): void {
    const inputEvent = event as InputEvent;
    if (this.student) {
      if (this.student.extracurricularActivities === null) {
        this.student.extracurricularActivities = ''; // Initialize if null
      }
      if (inputEvent.data) {
        this.student.extracurricularActivities += inputEvent.data; // Append data
      }
    }
    console.log(this.student);
  }

  // Method to handle the submission of the form, e.g., save or update user data
  saveProfile(): void {
    if (this.student) {
      const studentData: Student = {
        ...this.student,
        skills: this.selectedSkills.join(', '), // Convert skills array to a comma-separated string
        // Make sure to provide default values for optional fields
        extracurricularActivities: this.student.extracurricularActivities || '',
        specification: this.student.specification || '',
        course: this.student.course || '',
        profilePicture: this.student.profilePicture || ''
      };

      // Call updateStudent method here (uncomment when your service is ready)
      // this.studentService.updateStudent(this.student.enrollment, studentData).subscribe({
      //   next: (updatedStudent: Student) => {
      //     console.log('Student updated successfully:', updatedStudent);
      //   },
      //   error: (error) => {
      //     console.error('Error updating student:', error);
      //   },
      // });
    }
  }

  // Method to handle CV generation
  generateCV(): void {
    // Logic to generate CV
  }
}

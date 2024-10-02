import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pyq',
  templateUrl: './pyq.component.html',
  styleUrl: './pyq.component.css'
})

export class PYQComponent {
  questionPaperForm: FormGroup;
  years: string[] = ['Ist Year','2nd Year','3rd Year','4th Year'];
  types: string[] = ['Mst-1', 'Mst-2','Mst-3','End Sem'];
  semesters: string[] = ['Semester A', 'Semester B'];
  courses: string[] = ['Course 1', 'Course 2', 'Course 3'];

  
  constructor(private fb: FormBuilder,private router: Router) {
    this.questionPaperForm = this.fb.group({
      year: [null],
      type:[null],
      semester: [null],
      course: [null],
    });
  }

  onGenerate() {
    const selectedYear = this.questionPaperForm.get('year')?.value;
    const selectedtype = this.questionPaperForm.get('type')?.value;
    const selectedSemester = this.questionPaperForm.get('semester')?.value;
    const selectedCourse = this.questionPaperForm.get('course')?.value;
    console.log('Year:', selectedYear,'Type:',selectedtype, 'Semester:', selectedSemester, 'Course:', selectedCourse);

  }
  

  goToEvent(): void {
   // this.router.navigate(['/user_event/status/']); // Replace 'EventName' with the actual event name or a variable.
   this.router.navigate(['/event/list/try']);
  }
}


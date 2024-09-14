import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-pyq',
  templateUrl: './upload-pyq.component.html',
  styleUrl: './upload-pyq.component.css'
})
export class UploadPyqComponent {
  questionPaperForm: FormGroup;
  years: string[] = ['1st Year','2nd Year','3rd Year','4th Year'];
  types: string[] = ['Mst-1', 'Mst-2','Mst-3','End Sem'];
  semesters: string[] = ['Semester A', 'Semester B'];
  courses: string[] = ['Course 1', 'Course 2', 'Course 3'];
  constructor(private fb: FormBuilder) {
    this.questionPaperForm = this.fb.group({
      year: [null],
      semester: [null],
      type: [null],
      course: [null],
      pyqYear: [''],
      file:[null]
    });
  }
  

  ngOnInit(): void {}
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.questionPaperForm.patchValue({
      file: file
    });
  }
  onGenerate() {
    const selectedYear = this.questionPaperForm.get('year')?.value;
    const selectedtype = this.questionPaperForm.get('type')?.value;
    const selectedSemester = this.questionPaperForm.get('semester')?.value;
    const selectedCourse = this.questionPaperForm.get('course')?.value;
    console.log('Year:', selectedYear,'Type:',selectedtype, 'Semester:', selectedSemester, 'Course:', selectedCourse);

  }


  onSubmit(): void {
    if (this.questionPaperForm.valid) {
      console.log('Form data:', this.questionPaperForm.value);
    }
  }
}

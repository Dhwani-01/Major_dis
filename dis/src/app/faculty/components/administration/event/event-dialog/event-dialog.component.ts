// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-event-dialog',
//   templateUrl: './event-dialog.component.html',
//   styleUrls: ['./event-dialog.component.scss']
// })
// export class EventDialogComponent {

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { cloneDeep } from 'lodash';
import { EventformService } from 'src/app/services/eventform.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit {
  
  eventForm: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  facultyList: any[] = [];

  // Declare eventFormService as a class property
  constructor(private fb: FormBuilder, private eventFormService: EventformService, private dialogRef: MatDialogRef<EventDialogComponent>, private facultyService: FacultyService,
    private spinnerService:SpinnerService, private toastService: HotToastService
  ) { // Inject the service
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],
      description: ['', Validators.required],
      facultyCoordinator: ['', Validators.required],
      totalRegistrations: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      logo: [null, Validators.required],
      // eventImages: [null, Validators.nullValidator]
    });
  }
  async Init() {
    for (let key in this.fetchData) {
      await this.fetchData[key]();
    }
  }
  ngOnInit(): void {
      this.Init();
  }

  fetchData: any = {
    getFacultyData: async () => {
      try {
        this.facultyService.getFacultyData().subscribe((Response) => {
          this.facultyList = Response;
          console.log(this.facultyList);
        });
        this.spinnerService.removeSpinner();
      } catch (error) {
        this.toastService.error('Failed');
      }
    },
  };
  // Logo preview
  onLogoChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.eventForm.patchValue({ logo: file });
    }
  }

  // Event image preview
  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.eventForm.patchValue({ eventImages: file });
    }
  }

  prepareData(form: any) {
    let obj = cloneDeep(form.getRawValue());
    console.log(obj);
    
    // Trim strings
    for (let key in obj) {
      obj = {
        ...obj,
        [key]: typeof obj[key] == 'string' ? obj[key].trim() : obj[key],
      };
    }
    return obj;
  }
  convertTime(timeStr:any){
    const [time, modifier] = timeStr.split(' ');
   let [hours, minutes] = time.split(':');
   if (hours === '12') {
      hours = '00';
   }
   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }
   return `${hours}:${minutes}`;
  }
  // Submit the form
  onSubmit() {
    if (this.eventForm.valid) {
      const formData = new FormData();
      formData.append('logo', this.eventForm.get('logo')?.value);
      let data = { ...this.prepareData(this.eventForm) };
      data.date = data.date.toLocaleDateString();
      data.time = this.convertTime(data.time);
  
      console.log(data);
     
      formData.append('name', this.eventForm.get('name')?.value);
      formData.append('date', data.date);
      // formData.append('date', new Date(eventForm.value.date));
      // const date = this.eventForm.get('date')?.value;
      // const formattedDate = this.formatDate(date);

      // formData.append('date', formattedDate); 
      
      formData.append('time', data.time);
      formData.append('venue', this.eventForm.get('venue')?.value);
      formData.append('description', this.eventForm.get('description')?.value);
      formData.append('facultyCoordinator', this.eventForm.get('facultyCoordinator')?.value);
      formData.append('totalRegistrations', this.eventForm.get('totalRegistrations')?.value);
      
      // formData.append('eventImages', this.eventForm.get('eventImages')?.value);
      console.log(formData);

      this.eventFormService.createEvent(formData).subscribe(response => {
        console.log(response);
        alert('Event submitted successfully!');
        this.dialogRef.close();
      }, error => {
        console.error(error);
        alert('There was an error submitting the event.');
      });
    }
  }
  // private formatDate(date: any): string {
  //   const d = new Date(date);
  //   const day = d.getDate().toString().padStart(2, '0');
  //   const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
  //   const year = d.getFullYear();
  
  //   return `${day}-${month}-${year}`;
  // }

  onCancel() {
    this.dialogRef.close(); // Close the dialog on cancel (Added)
  }
}

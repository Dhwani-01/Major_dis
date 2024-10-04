// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { EventformService } from '../eventform.service';

// @Component({
//   selector: 'app-event-form',
//   templateUrl: './event-form.component.html',
//   styleUrl: './event-form.component.css'
// })
// export class EventFormComponent {
//   eventForm: FormGroup;
//   logoPreview: string | ArrayBuffer | null = null;
//   imagePreview: string | ArrayBuffer | null = null;

//   constructor(private fb: FormBuilder) {
//     this.eventForm = this.fb.group({
//       name: ['', Validators.required],
//       date: ['', Validators.required],
//       time: ['', Validators.required],
//       venue: ['', Validators.required],
//       description: ['', Validators.required],
//       facultyCoordinator: ['', Validators.required],
//       totalRegistrations: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
//       logo: [null, Validators.required],
//       eventImages: [null, Validators.required]
//     });
//   }

//   // Logo preview
//   onLogoChange(event: Event) {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.logoPreview = reader.result;
//       };
//       reader.readAsDataURL(file);
//       this.eventForm.patchValue({ logo: file });
//     }
//   }

//   // Event image preview
//   onImageChange(event: Event) {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreview = reader.result;
//       };
//       reader.readAsDataURL(file);
//       this.eventForm.patchValue({ eventImages: file });
//     }
//   }

//   onSubmit() {
//     if (this.eventForm.valid) {
//       const formData = new FormData();
//       formData.append('name', this.eventForm.get('name')?.value);
//       formData.append('date', this.eventForm.get('date')?.value);
//       formData.append('time', this.eventForm.get('time')?.value);
//       formData.append('venue', this.eventForm.get('venue')?.value);
//       formData.append('description', this.eventForm.get('description')?.value);
//       formData.append('facultyCoordinator', this.eventForm.get('facultyCoordinator')?.value);
//       formData.append('totalRegistrations', this.eventForm.get('totalRegistrations')?.value);
//       formData.append('logo', this.eventForm.get('logo')?.value);
//       formData.append('eventImages', this.eventForm.get('eventImages')?.value);

//       this.eventFormService.createEvent(formData).subscribe(response => {
//         console.log(response);
//         alert('Event submitted successfully!');
//       }, error => {
//         console.error(error);
//         alert('There was an error submitting the event.');
//       });
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventformService } from '../eventform.service'; // Import the service

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  eventForm: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  // Declare eventFormService as a class property
  constructor(private fb: FormBuilder, private eventFormService: EventformService) { // Inject the service
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],
      description: ['', Validators.required],
      facultyCoordinator: ['', Validators.required],
      totalRegistrations: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      logo: [null, Validators.required],
      eventImages: [null, Validators.required]
    });
  }

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

  // Submit the form
  onSubmit() {
    if (this.eventForm.valid) {
      const formData = new FormData();
      formData.append('name', this.eventForm.get('name')?.value);
      formData.append('date', this.eventForm.get('date')?.value);
      formData.append('time', this.eventForm.get('time')?.value);
      formData.append('venue', this.eventForm.get('venue')?.value);
      formData.append('description', this.eventForm.get('description')?.value);
      formData.append('facultyCoordinator', this.eventForm.get('facultyCoordinator')?.value);
      formData.append('totalRegistrations', this.eventForm.get('totalRegistrations')?.value);
      formData.append('logo', this.eventForm.get('logo')?.value);
      formData.append('eventImages', this.eventForm.get('eventImages')?.value);

      this.eventFormService.createEvent(formData).subscribe(response => {
        console.log(response);
        alert('Event submitted successfully!');
      }, error => {
        console.error(error);
        alert('There was an error submitting the event.');
      });
    }
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-event-edit-dialog',
//   templateUrl: './event-edit-dialog.component.html',
//   styleUrls: ['./event-edit-dialog.component.scss']
// })
// export class EventEditDialogComponent {

// }
// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-event-edit-dialog',
// //   templateUrl: './event-edit-dialog.component.html',
// //   styleUrls: ['./event-edit-dialog.component.scss']
// // })
// // export class EventEditDialogComponent {

// // }
// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { EventformService } from 'src/app/services/eventform.service';

// @Component({
//   selector: 'app-event-edit-dialog',
//   templateUrl: './event-edit-dialog.component.html',
//   styleUrls: ['./event-edit-dialog.component.scss']
// })
// export class EventEditDialogComponent implements OnInit {
//   eventForm!: FormGroup;
//   logoPreview: string | ArrayBuffer | null = null;
//   imagePreview: string | ArrayBuffer | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private eventFormService: EventformService,
//     private dialogRef: MatDialogRef<EventEditDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   ngOnInit(): void {
//     this.initializeForm();
//     if (this.data) {
//       this.populateForm(this.data);
//     }
//   }

//   initializeForm(): void {
//     this.eventForm = this.fb.group({
//       name: [this.data?.name || '', [Validators.required]],
//       date: [this.data?.date || '', [Validators.required]],
//       time: [this.data?.time || '', [Validators.required]],
//       venue: [this.data?.venue || '', [Validators.required]],
//       description: [this.data?.description || '', [Validators.required]],
//       facultyCoordinator: [this.data?.facultyCoordinator || '', [Validators.required]],
//       totalRegistrations: [this.data?.totalRegistrations || '', [Validators.required]],
//       logo: [null],
//       eventImages: [null]
//     });
//   }

//   populateForm(data: any): void {
//     this.eventForm.patchValue(data);
//     if (data.logo) {
//       this.logoPreview = 'data:image/jpeg;base64,' + data.logo;
//     }
//     if (data.eventImages) {
//       this.imagePreview = 'data:image/jpeg;base64,' + data.eventImages;
//     }
//   }

//   // onLogoChange(event: any): void {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onload = () => {
//   //       this.logoPreview = reader.result as string;
//   //       this.eventForm.get('logo')?.setValue(file);
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // }

//   // onImageChange(event: any): void {
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onload = () => {
//   //       this.imagePreview = reader.result as string;
//   //       this.eventForm.get('eventImages')?.setValue(file);
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // }

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
//   // onSubmit(): void {
//   //   if (this.eventForm.valid) {
//   //     const updatedEvent = { ...this.eventForm.value };
//   //     this.dialogRef.close(updatedEvent);
//   //   }
//   // }

//   onSubmit(): void {
//     if (this.eventForm.valid) {
//       const updatedEvent = { ...this.eventForm.value };
//       console.log("updated event",updatedEvent);
//       // Make a PUT API call to update the event
//       this.eventFormService.updateEvent(this.data.id, updatedEvent).subscribe(
//         (response) => {
//           console.log('Event updated successfully:', response);
//           this.dialogRef.close(response); // Close dialog and send updated event back
//         },
//         (error) => {
//           console.error('Error updating event:', error);
//         }
//       );
//     }
//   }
  
//   onCancel(): void {
//     this.dialogRef.close();
//   }
// }

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventformService } from 'src/app/services/eventform.service';

@Component({
  selector: 'app-event-edit-dialog',
  templateUrl: './event-edit-dialog.component.html',
  styleUrls: ['./event-edit-dialog.component.scss']
})
export class EventEditDialogComponent implements OnInit {
  eventForm!: FormGroup;
  logoPreview: string | ArrayBuffer | null = null;
  // imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private eventFormService: EventformService,
    private dialogRef: MatDialogRef<EventEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    if (this.data) {
      this.populateForm(this.data);
    }
  }

  initializeForm(): void {
    this.eventForm = this.fb.group({
      // name: [this.data?.name || '', [Validators.required]],
      date: [this.data?.date || '', [Validators.required]],
      time: [this.data?.time || '', [Validators.required]],
      venue: [this.data?.venue || '', [Validators.required]],
      description: [this.data?.description || '', [Validators.required]],
      facultyCoordinator: [this.data?.facultyCoordinator || '', [Validators.required]],
      totalRegistrations: [this.data?.totalRegistrations || '', [Validators.required, Validators.pattern('^[0-9]*$')]],
      logo: [null, Validators.required],
      // eventImages: [null, Validators.required]
    });
  }

  populateForm(data: any): void {
    this.eventForm.patchValue(data);
    if (data.logo) {
      this.logoPreview = 'data:image/jpeg;base64,' + data.logo;
      this.eventForm.get('logo')?.clearValidators();
    }
    // if (data.eventImages) {
    //   this.imagePreview = 'data:image/jpeg;base64,' + data.eventImages;
    //   this.eventForm.get('eventImages')?.clearValidators();
    // }
  }

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

  // onImageChange(event: Event) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imagePreview = reader.result;
  //     };
  //     reader.readAsDataURL(file);
  //     this.eventForm.patchValue({ eventImages: file });
  //   }
  // }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const formData = new FormData();
      // formData.append('name', this.eventForm.get('name')?.value);
      formData.append('date', this.eventForm.get('date')?.value);
      formData.append('time', this.eventForm.get('time')?.value);
      formData.append('venue', this.eventForm.get('venue')?.value);
      formData.append('description', this.eventForm.get('description')?.value);
      formData.append('facultyCoordinator', this.eventForm.get('facultyCoordinator')?.value);
      formData.append('totalRegistrations', this.eventForm.get('totalRegistrations')?.value);
      if (this.eventForm.get('logo')?.value) {
        formData.append('logo', this.eventForm.get('logo')?.value);
      }
      // if (this.eventForm.get('eventImages')?.value) {
      //   formData.append('eventImages', this.eventForm.get('eventImages')?.value);
      // }
      console.log("formData",formData);

      this.eventFormService.updateEvent(this.data.id, formData).subscribe(
        (response) => {
          alert('Event updated successfully!');
          console.log('Event updated successfully:', response);
          this.dialogRef.close(response);
        },
        (error) => {
          console.error('Error updating event:', error);
          alert('There was an error updating the event.');
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

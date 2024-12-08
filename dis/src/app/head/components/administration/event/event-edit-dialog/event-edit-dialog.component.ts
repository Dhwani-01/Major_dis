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
import { cloneDeep } from 'lodash';
import { HotToastService } from '@ngneat/hot-toast';
import { FacultyService } from 'src/app/services/faculty.service';
import { SpinnerService } from 'src/app/services/spinner.service';
// import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-edit-dialog',
  templateUrl: './event-edit-dialog.component.html',
  styleUrls: ['./event-edit-dialog.component.scss']
})
export class EventEditDialogComponent implements OnInit {
  eventForm: any =this.fb.group({
    name: [this.data.data?.name || '', [Validators.required]],
    date: [this.data.data?.date || '', [Validators.required]],
    time: [this.data.data?.time || '', [Validators.required]],
    venue: [this.data.data?.venue || '', [Validators.required]],
    description: [this.data.data?.description || '', [Validators.required]],
    facultyCoordinator: [this.data.data?.facultyCoordinator || '', [Validators.required]],
    totalRegistrations: [this.data.data?.totalRegistrations || '', [Validators.required, Validators.pattern('^[0-9]*$')]],
    // logo: [null, Validators.required],
    // eventImages: [null, Validators.nullValidator]
  });

  updateOngoingEventStatus:any =this.fb.group({
    attendanceFile: ['', [Validators.required]],
    photos: ['', [Validators.nullValidator]],
  });
  logoPreview: string | ArrayBuffer | null = null;
  status: any = this.data.status;
  imagePreview: string | ArrayBuffer | null = null;
  attendanceSheet: any;
  photosSheet: any;
  facultyList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private eventFormService: EventformService,
    private dialogRef: MatDialogRef<EventEditDialogComponent>,
    private facultyService: FacultyService,
    private spinnerService:SpinnerService, 
    private toastService: HotToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  async Init() {
    for (let key in this.fetchData) {
      await this.fetchData[key]();
    }
    console.log(this.data.data);
    console.log(this.facultyList);
  }

  ngOnInit(): void {
    console.log(this.data.data);
    this.Init();
    // this.initializeForm();
    if (this.data) {
      this.populateForm(this.data);
    }
    
  }

  // initializeForm(): void {
    // this.eventForm = this.fb.group({
    //   name: [this.data.data?.name || '', [Validators.required]],
    //   date: [this.data.data?.date || '', [Validators.required]],
    //   time: [this.data.data?.time || '', [Validators.required]],
    //   venue: [this.data.data?.venue || '', [Validators.required]],
    //   description: [this.data.data?.description || '', [Validators.required]],
    //   facultyCoordinator: [this.data.data?.facultyCoordinator || '', [Validators.required]],
    //   totalRegistrations: [this.data.data?.totalRegistrations || '', [Validators.required, Validators.pattern('^[0-9]*$')]],
      // logo: [null, Validators.required],
      // eventImages: [null, Validators.nullValidator]
    // });
  // }

  populateForm(data: any): void {
    console.log("jbkj",data)
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

  // onSubmit(): void {
  //   if (this.eventForm.valid) {
  //     const formData = new FormData();
  //     // formData.append('name', this.eventForm.get('name')?.value);
  //     formData.append('date', this.eventForm.get('date')?.value);
  //     formData.append('time', this.eventForm.get('time')?.value);
  //     formData.append('venue', this.eventForm.get('venue')?.value);
  //     formData.append('description', this.eventForm.get('description')?.value);
  //     formData.append('facultyCoordinator', this.eventForm.get('facultyCoordinator')?.value);
  //     formData.append('totalRegistrations', this.eventForm.get('totalRegistrations')?.value);
  //     if (this.eventForm.get('logo')?.value) {
  //       formData.append('logo', this.eventForm.get('logo')?.value);
  //     }
  //     // if (this.eventForm.get('eventImages')?.value) {
  //     //   formData.append('eventImages', this.eventForm.get('eventImages')?.value);
  //     // }
  //     console.log("formData update",formData);

  //     this.eventFormService.updateEvent(this.data.data.id, formData).subscribe(
  //       (response) => {
  //         alert('Event updated successfully!');
  //         console.log('Event updated successfully:', response);
  //         this.dialogRef.close(response);
  //       },
  //       (error) => {
  //         console.error('Error updating event:', error);
  //         alert('There was an error updating the event.');
  //       }
  //     );
  //   }
  // }

  prepareData(form: any) {
    let obj = cloneDeep(form.getRawValue());
    console.log("datank",obj);
    
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
      console.log("bjjk",FormData);
      formData.append('logo', this.eventForm.get('logo')?.value);
      let data = { ...this.prepareData(this.eventForm) };
     // data.date = data.date.toLocaleDateString();
      data.time = this.convertTime(data.time);
  
      console.log("bjjk",data);
     
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
      // console.log(formData);
            console.log("formData update",formData);

           this.eventFormService.updateEvent(this.data.data.id, formData).subscribe(
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

  selectAttendanceFileInput(event: any){
    console.log(event.target.files);
		this.attendanceSheet=event.target.files[0];
	}

  selectPhotosFileInput(event: any){
    console.log(event.target.files);
		this.photosSheet=event.target.files[0];
	}

  // confirmOngoing(data :any) {
  //   console.log("iddd",data)
  //   console.log("sdcsdcs",data.data.id)
  //   // if (this.status === 'ongoing') {
  //   //   console.log('Ongoing event confirmed');
  //   //   alert('Event switched to ongoing');
  //   // }
  //   this.eventFormService.switchToOngoing(data.data.id).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       alert('Event status successfully switched to ongoing.');
  //       // Optionally reload the data or update the UI
  //       this.fetchEvents();
  //     },
  //     error: (err) => {
  //       console.error('Error switching event status:', err);
  //       alert('Failed to switch event status. Please try again.');
  //     },
  //   });
  // }
  confirmOngoing(data: any): void {
    const eventId = data.data.id;
    const status = 'ongoing';
  
    this.eventFormService.updateEventStatus(eventId, status).subscribe({
      next: (response) => {
        console.log(response);
        alert('Event status successfully switched to ongoing.');
       // this.fetchEvents(); // Reload events or update the UI
      },
      error: (err) => {
        console.error('Error updating event status:', err);
        alert('Failed to update event status. Please try again.');
      },
    });
  }

  async onStatusUpdate(){
    // console.log(this..value.status);
   
    console.log("filecsda",this.attendanceSheet);
    console.log("vjdcds photo",this.photosSheet);
    // let status=this.updateUpcomingLectureStatus.value.status;
    const formData= new FormData();
    let status = 'ongoing';
    formData.append('file',this.attendanceSheet);
    formData.append('photofile',this.photosSheet);

    let response3: any = { message: '' };
    try {
     // response3 = await this.eventFormService.updateExpertLectureByStatus(status,[this.formData.expertLectureId],formData); 
      response3 = await this.eventFormService.uploadFiles(
      this.data.data.id,
      this.attendanceSheet!,
      this.photosSheet!
    );
    console.log(response3);
    
  //   if (response3) {
  //     this.toastService.success(response3.message); // Display success message
  // } else {
  //     this.toastService.error('Error uploading files.');
  // }
       
    } catch (error) {
      console.log(error)
      this.spinnerService.removeSpinner();
      this.toastService.error('Unable to update status. Please try again.');
      return;
    }
    if (response3) 
      {
        status = "completed";
        this.toastService.success("Status updated successfully!");
    this.spinnerService.removeSpinner();
      }
    this.dialogRef.close(status);

  }


}

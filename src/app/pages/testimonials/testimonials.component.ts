import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: any[] = [];

  formData: FormData = new FormData();
  testimonialsform: FormGroup;
  Edittestimonialsform: FormGroup;

  selectedtestimonials: any = null;


  constructor(private rest: RestService, private fb: FormBuilder, private router: Router) {

    this.testimonialsform = this.fb.group({
      Photo: new FormControl('', [Validators.required]),

      Name: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Information: new FormControl('', [Validators.required])
    })

    this.Edittestimonialsform = this.fb.group({
      Testimonial_id: new FormControl(''),

      Photo: new FormControl(null),
      Name: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Information: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getTestimonials();
  }

  getTestimonials() {
    this.rest.gettestimonials().subscribe((data: any) => {
      this.testimonials = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  updateStatus(event: any): void {
    this.Edittestimonialsform.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formData.append(fieldName, file, file.name);
    }
  }

  onFormSubmit(): void {
    if (!this.formData) {
      this.formData = new FormData();
    }
    // Populate formData with form fields
    const formValues = this.testimonialsform.value; // or this.EditProductform.value
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        this.formData.append(key, formValues[key]);
      }
    }

    this.rest.Testimonial(this.formData).subscribe(response => {
      console.log('Upload success', response);
      this.testimonialsform.reset();
    }, error => {
      console.error('Upload error', error);
    });
  }

  editproduct(i: number) {
    this.selectedtestimonials = 1;
    this.Edittestimonialsform.patchValue(this.testimonials[i - 1]);
  }

  onFileChange(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.Edittestimonialsform.patchValue({ [fieldName]: file });
    }
  }

  updateProduct(): void {
    const formData = new FormData();
    Object.keys(this.Edittestimonialsform.controls).forEach(key => {
      formData.append(key, this.Edittestimonialsform.get(key)?.value);
    });
    // Update form data 
    this.rest.updatetestimonials(this.Edittestimonialsform.value.Testimonial_id, formData).subscribe(
      response => {
        console.log('Update success', response);
        this.Edittestimonialsform.reset();
        this.ngOnInit();
      },
      error => {
        console.error('Update error', error);
      }
    );
  }

  Deletetestimonial(Testimonial_id: number) {
    if (confirm('Are You  want to delete a Product..')) {
      this.rest.deletetestmonials(Testimonial_id).subscribe((data: any) => {
        console.log('Deleted successfully', data);
        this.getTestimonials();
      }, (err: any) => {
        console.log(err);
      })
    }
  }


}

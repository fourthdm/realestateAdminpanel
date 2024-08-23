import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {
  pro: any;
  baner: any[] = [];

  editformbaner: FormGroup;
  SelectedBaner: any = null;
  formData: FormData = new FormData();
  addformbaner: FormGroup;

  constructor(private rest: RestService, private fb: FormBuilder) {

    this.addformbaner = this.fb.group({
      status: new FormControl('', [Validators.required]),
      Bimage1: new FormControl('', [Validators.required]),
      Bimage2: new FormControl('', [Validators.required])
    })

    this.editformbaner = this.fb.group({
      Baner_id: new FormControl(''),

      status: new FormControl('', [Validators.required]),
      Bimage1: new FormControl(null),
      Bimage2: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.getBaner();
  }

  getBaner() {
    this.rest.Allbanner().subscribe((data: any) => {
      this.baner = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  onFormSubmit(): void {
    if (!this.formData) {
      this.formData = new FormData()
    }
    const formValues = this.addformbaner.value;
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        this.formData.append(key, formValues[key]);
      }
    }
    this.rest.Addbanner(this.formData).subscribe(response => {
      console.log('Upload success', response);
      this.addformbaner.reset();
    }, error => {
      console.error('Upload error', error);
    });
  }

  editbaner(i: number) {
    this.SelectedBaner = 1;
    this.editformbaner.patchValue(this.baner[i - 1])
  }

  Updatebanner() {
    const formdata = new FormData();
    Object.keys(this.editformbaner.controls).forEach(key => {
      formdata.append(key, this.editformbaner.get(key)?.value);
    })
    this.rest.UpdateBaner(this.editformbaner.value.Baner_id, formdata).subscribe(
      response => {
        console.log('Update success', response);
        this.editformbaner.reset();
        this.ngOnInit();
      },
      error => {
        console.error('Update error', error);
      }
    );
  }

  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formData.append(fieldName, file, file.name);
    }
  }

  toggleStatus(event: any): void {
    this.addformbaner.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  updateStatus(event: any): void {
    this.editformbaner.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  onFileChange(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.editformbaner.patchValue({ [fieldName]: file });
    }
  }


  DeleteBaner(Baner_id: number) {
    this.rest.Deletebaner(Baner_id).subscribe((data: any) => {
      console.log(data);
      this.getBaner();
    }, (err: any) => {
      console.log(err);
    })
  }

  getStyle(baner: any): any {  //function is used find a color to  stock..
    if (baner.status == "1") {
      return {
        'color': 'green',
      }
    } else if (baner.status == "0") {
      return {
        'color': 'red',
      }
    }
  }
}
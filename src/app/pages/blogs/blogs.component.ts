import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  AddBlogsForm: FormGroup;
  EditBlogForm: FormGroup;

  formdata: FormData = new FormData();
  SelectedBlog: any = null;
  Blogs: any[] = [];

  constructor(private rest: RestService, private fb: FormBuilder, private state: StateService) {
    this.AddBlogsForm = this.fb.group({
      files: new FormControl('', [Validators.required]),
      Articles: new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required]),
      News: new FormControl('', [Validators.required]),
      Content: new FormControl('', [Validators.required]),
      Blogimage: new FormControl('', [Validators.required])
    });

    this.EditBlogForm = this.fb.group({
      Blogs_id: new FormControl(''),
      files: new FormControl('', [Validators.required]),
      Articles: new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required]),
      News: new FormControl('', [Validators.required]),
      Content: new FormControl('', [Validators.required]),

      Blogimage: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.rest.AllBlogs().subscribe((data: any) => {
      console.log(data);
      this.Blogs = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formdata.append(fieldName, file, file.name);
    }
  }
  updateStatus(event: any): void {
    this.EditBlogForm.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  onChangefile(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formdata.append(fieldName, file, file.name);
    }
  }

  editBlogs(i: number) {
    this.SelectedBlog = 1;
    this.EditBlogForm.patchValue(this.Blogs[i - 1]);
  }

  updateBlogs() {
    const formdata = new FormData();

    Object.keys(this.EditBlogForm.controls).forEach(key => {
      formdata.append(key, this.EditBlogForm.get(key)?.value);
    })
    this.rest.UpdateBlog(this.EditBlogForm.value.Blogs_id, formdata).subscribe(
      response => {
        console.log('Update success', response);
        this.EditBlogForm.reset();
        this.ngOnInit();
      },
      error => {
        console.error('Update error', error);
      }
    );
  }

  onFormSubmit(): void {
    if (!this.formdata) {
      this.formdata = new FormData();
    }
    // Populate formData with form fields
    const formValues = this.AddBlogsForm.value; // or this.EditProductform.value
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        this.formdata.append(key, formValues[key]);
      }
    }
    this.rest.AddnewBlog(this.formdata).subscribe(response => {
      console.log('Upload success', response);
      this.AddBlogsForm.reset();
    }, error => {
      console.error('Upload error', error);
    });
  }

  deleteBlogs(Blogs_id: number) {
    this.rest.DeleteBlog(Blogs_id).subscribe((data: any) => {
      console.log(data);
      this.Blogs = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
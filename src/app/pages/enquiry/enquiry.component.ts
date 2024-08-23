import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  pro: any;
  enquiry: any[] = [];
  editenquiry: FormGroup;

  selectedenquiry: any = null;

  constructor(private rest: RestService) {
    this.editenquiry = new FormGroup({
      enquiry_id: new FormControl(''),
      Status: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.rest.getenquiry().subscribe((data: any) => {
      console.log(data);
      this.enquiry = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }


  editenquirys(i: number) {
    this.selectedenquiry = 1;
    this.editenquiry.patchValue(this.enquiry[i - 1]);
  }

  Updateenquiry() {
    this.rest.UpdateEnquiryStatus(this.editenquiry.value).subscribe((data: any) => {
      this.selectedenquiry = null;
      this.editenquiry.reset();this.getdata();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

 

  delete(enquiry_id: number) {
    if (confirm('Are You Sure To Delete It ?')) {
      this.rest.deleteinquiry(enquiry_id).subscribe((resp: any) => {
        console.log(resp);
        this.getdata();
      }, (err: any) => {
        console.log(err);
      });
    }
  }
}

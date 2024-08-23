import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  isAdmin: boolean = false;

  pro: number = 1;
  selectedadmin: any = null;
  Alladmin: any[] = [];
  Addadmin: FormGroup;
  editadmin: FormGroup;

  constructor(private _rest: RestService) {
    this.Addadmin = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('', [Validators.required]),
    });

    this.editadmin = new FormGroup({
      id: new FormControl(''),
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      MobileNo: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getalladmin();

    const token = localStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      if (decoded.role === 'Admin') {
        this.isAdmin = true;
      } else {

      }
    } else {

    }
  }

  getalladmin() {
    this._rest.Alladmins().subscribe((data: any) => {
      console.log(data);
      this.Alladmin = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  adminadd() {
    this._rest.AddNewAdmin(this.Addadmin.value).subscribe((data: any) => {
      console.log(data);
      this.Alladmin.push();
      this.Addadmin.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

  editAdmin(i: number) {
    this.selectedadmin = 1;
    this.editadmin.patchValue(this.Alladmin[i - 1]);
  }

  Updateadmin() {
    this._rest.UpdateAdmin(this.editadmin.value).subscribe((data: any) => {
      console.log(data);
      this.selectedadmin = null;
      this.editadmin.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    })
  }

  delete(id: number) {
    if (confirm('Are You Sure To Delete AdminUser?')) {
      this._rest.DeleteAdmin(id).subscribe((data: any) => {
        console.log(data);
        this.getalladmin();
      }, (err: any) => {
        console.log(err);
        this.getalladmin();
      });
    }
  }
}

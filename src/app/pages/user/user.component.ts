import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  pro: number = 1;

  Allusers: any[] = [];
  adduser: FormGroup;
  edituser: FormGroup;

  constructor(private _rest: RestService) {
    this.adduser = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),

    });

    this.edituser = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit(): void {
    this.getusers()
  }

  getusers() {
    this._rest.getAllusers().subscribe((data: any) => {
      console.log(data);
      this.Allusers = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  addusers() { }

  updateuser() { }

  delete(User_id: number) {
    if (confirm('Are You Sure To Delete It ?')) {
      this._rest.deleteUser(User_id).subscribe((resp: any) => {
        console.log(resp);
        this.getusers();
      }, err => {
        console.log(err);
      });
    }
  }
}

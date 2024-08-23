import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  liked: boolean = false;

  Loginform: FormGroup;

  constructor(private rest: RestService, private state: StateService, private _router: Router,) {
    this.Loginform = new FormGroup({
      Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(8)])
    })
  }

  ngOnInit(): void {

  }

  Show() {
    this.liked = !this.liked;
  }

  loginn() {
    this.rest.Login(this.Loginform.value).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.data);
      this.state.token = (data.data);
      this.state.decodetoken();
      this._router.navigate(['/Home']);
    }, (err: any) => {
      console.log(err);
    })
  }


}

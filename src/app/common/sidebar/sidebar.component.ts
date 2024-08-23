import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { RestService } from 'src/app/services/rest.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isSaleteam: boolean = false;

  constructor(private _rest: RestService, private _state: StateService, private _router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      if (decoded.role === 'salemanager') {
        this.isSaleteam = true;
      } else {

      }
    } else {

    }

  }

  view() {

  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}

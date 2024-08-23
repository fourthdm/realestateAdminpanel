import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  projects: any[] = [];

  constructor(private rest: RestService, private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      const Project_id = params['Project_id'];
      if (Project_id) {
        this.getallproject(Project_id);
      }
    });
  }

  getallproject(Project_id: string) {
    this.rest.viewproductsss(Project_id).subscribe((data: any) => {
      this.projects = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }
  getStyle(product: any): any {  //function is used find a color to products stock..
    if (product.status == "1") {
      return {
        'color': 'green',
      }
    } else if (product.status == "0") {
      return {
        'color': 'red',
      }
    }
  }

}

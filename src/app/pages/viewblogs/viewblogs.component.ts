import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['./viewblogs.component.css']
})
export class ViewblogsComponent implements OnInit {

  Blogs: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.rest.AllBlogs().subscribe((data: any) => {
      this.Blogs = data.data;
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

}

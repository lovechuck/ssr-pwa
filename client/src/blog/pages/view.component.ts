import { article } from './../model/article';
import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  item: article;

  constructor(private servive: BlogService) {

  }

  ngOnInit() {
    this.servive.view("1").subscribe((item) => {
      this.item = item
    })
  }

}

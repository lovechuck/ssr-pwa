import { BlogService } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { article } from '../model/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items: Array<article> = []

  constructor(private sevice: BlogService) {

  }

  ngOnInit() {
    this.sevice.search(0).subscribe((items) => {
      this.items = items
    })
  }

}

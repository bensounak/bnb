import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service.ts';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postes:any[];
  constructor(private blogService:BlogService) {
    //this.postes = this.blogService.postes;
  }

  ngOnInit() {
    this.postes = this.blogService.postes;
  }
}

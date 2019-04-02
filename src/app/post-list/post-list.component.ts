import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

postes = [
  {
    title:'Mon 1er post',
    content:'Ceci est mon premier post dans ce Blog',
    loveIts: 0,
    created_at:new Date()
  },
  {
    title:'Mon 2em post',
    content:'Ceci est mon deuxième post dans ce Blog',
    loveIts: 0,
    created_at:new Date()
  },
  {
    title:'Mon dernier post',
    content:'Ceci est mon troisieme post dans ce Blog',
    loveIts: 0,
    created_at:new Date()
  }

]

  constructor() { }

  ngOnInit() {
  }
}

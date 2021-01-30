import { Component, OnInit } from '@angular/core';
import { Post } from '../common/types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  postList = {} as Post[];

  constructor() { }

  ngOnInit() {
  }

  goToChat(post: Post){
    console.log('yeet');
  }
}

import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private postService: PostService
  ) {}

  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts)
      this.posts = posts;
    })
  }
  ngOnInit(): void {
    this.getPosts();
  }
}

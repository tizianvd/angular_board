import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  constructor(private postService : PostService){}

  sendPost() {
    console.log("test");
    this.postService.sendPost().subscribe(data => console.log(data));
  }
}

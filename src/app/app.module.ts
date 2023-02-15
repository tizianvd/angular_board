import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
 
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThreadComponent } from './thread/thread.component';
import { CreatePostComponent } from './thread/create-post/create-post.component';
import { CreateReplyComponent } from './thread/create-reply/create-reply.component';
import { PostListComponent } from './thread/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    CreatePostComponent,
    CreateReplyComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

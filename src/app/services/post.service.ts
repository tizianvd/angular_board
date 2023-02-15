import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const BASE_URL = "/api/posts"


@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() : Observable<any> {
    return this.http.get(BASE_URL);
  }

  sendPost() : Observable<any> {
    return this.http.post(BASE_URL, {title: "Test", content: "Test2"})
  }
}

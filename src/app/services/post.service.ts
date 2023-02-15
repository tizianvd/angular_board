import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const BASE_URL = "localhost:4200/api/posts"


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
}

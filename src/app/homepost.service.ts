import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class HomePostService {

    endpoint = "localhost:3000/projects/";
  constructor(private http: Http) {
    console.log(this.endpoint);
   }

  getAll() {
      return this.http.get(this.endpoint)
          .map(response => response.json());
          
  }


  getPost(id) {
      return this.http.get(this.endpoint + '/' +  id)
          .map(response => response.json());
          
  }

 }
 console.log(this.posts);
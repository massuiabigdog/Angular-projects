import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment'
import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class PostService {

    endpoint = environment.endpoint;
  constructor(private http: Http) {
    console.log(this.endpoint);
   }

  getAll() {
      return this.http.get(this.endpoint)
          .map(response => response.json());
          
  }


  getPost(id) {
      return this.http.get(this.endpoint + '/projects/' +  id)
          .map(response => response.json());
          
  }
 }
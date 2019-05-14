import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private _url= './assets/posts.json';

  posts = [];
  constructor(private http: HttpClient) {
    var obj;
    this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }


public getJSON(): Observable<any> {
    return this.http.get("./app/assets/posts.json")
                    .map((res:any) => res.json())

}
debugger;
  ngOnInit(): void {
    
    console.log( "start!" );


    this.http.get(this._url).subscribe( data => {
      
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data[key]);
        }
      }


      console.log(this.posts);
    })

  }
  
}

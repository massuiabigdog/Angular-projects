import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private _url= './assets/posts.json';
jobs =  [];
  posts = [];
  constructor(private httpClient: HttpClient) {
    var obj;
  }

  getJobs(){
    this.httpClient.get(environment.endpoint + `jobs/`).subscribe(
      (data: any[]) => {
        this.jobs = data;
        console.log(this.jobs);
      }
    )
  }

  ngOnInit(): void {
    console.log( "start!" );
    this.getJobs();
  }
  
}

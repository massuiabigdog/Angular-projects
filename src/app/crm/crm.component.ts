import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { multicast } from 'rxjs/operator/multicast';
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
project = [];
xxx: any;
jobs = [];

currentProject: any = multicast;
currentJob = [];
newproject = new newproject();
newjob = new newjob();
message: string;

posts: Observable<any>;
  newPost: Observable<any>;
  constructor(
    private router: Router,
    private httpClient:HttpClient,

  ) { }

  ngOnInit() {
    this.getProject();
    this.getJobs();
  }

  getProject(){
    this.httpClient.get(environment.endpoint + `projects/`).subscribe(
      (data: any[]) => {
        this.project = data;
        console.log('xxx');
        console.log(this.project);
      }
    )
  }
 

  chooseProject(xxx: any) {
  //   debugger;
  //   this.message = 'project';
  // this.currentProject = xxx;
  // console.log(this.currentProject);
  // this.router.navigate(['/detail', this.ID]);
  }
  // postProject() {
  //   const data: Post = {
  //     id: null,
  //     userId: 23,
  //     title: 'My New Post',
  //     body: 'Hello World!'
  //   } 

  //   // this.httpClient.post(environment.endpoint + `projects/`, data)
  //   //   .retry(3)
  //   //   .catch(err => {
  //   //     console.log(err)
  //   //     return Observable.of(err)
  //   //   })

  //   this.httpClient.post<Post>(environment.endpoint + `projects/`, data, httpOptions)


//  } 

  getJobs(){
    this.httpClient.get(environment.endpoint + `jobs/`).subscribe(
      (data: any[]) => {
        this.jobs = data;
        console.log('zzz');
        console.log(this.jobs);
      }
    )
  }

  
 postJob() {
  this.newjob.companylogo = 'xxx';
   return fetch(environment.endpoint +  'jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.newjob),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson)  {
      }.bind(this)) ;
      }

postProject() {
  this.newproject.title = 'xxx';
  this.newproject.shortdescription = 'xxx';
   return fetch(environment.endpoint +  'projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.newproject),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson)  {
      }.bind(this)) ;
      }

}
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export class newproject {
  constructor(
    public title?: any,
    public shortdescription?: any,
  ) { }
}
export class newjob {
  constructor(
    public companylogo?: any,
  ) { }
}



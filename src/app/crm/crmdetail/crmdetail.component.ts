import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-crmdetail',
  templateUrl: './crmdetail.component.html',
  styleUrls: ['./crmdetail.component.css']
})
export class CrmdetailComponent implements OnInit {
  projects : any;
  techs : any;
  photoarray: any = [];
  projectphotos: any = [];
  jobs = [];
  ID: any;
  serverresponse: any;
  isProject: boolean;
  constructor(
    private httpClient:HttpClient,
    private route: ActivatedRoute,


  ) {
   }   
   subscription: Subscription;
 

  
   getprojectID() {
    var server;
     return fetch(environment.endpoint +  'projects/' + this.ID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          server = response;
          console.log(server);
          return response.json();
        })
        .then(function (myJson)  {
          console.log(myJson);
          this.projects = myJson;
          this.techs = this.projects.tech;
          this.photoarray = this.projects.photoarray;
        }.bind(this)) ;
        }


    getJobID() {
      var server;
       return fetch(environment.endpoint +  'jobs/' + this.ID, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(function (response) {
            server = response;
            console.log(server);
            return response.json();
          })
          .then(function (myJson)  {
            console.log(myJson);
            if (server.ok == true) {
              this.isProject = false;
            } 
            else {
              this.isProject = true;
            }
            this.jobs = myJson;
          }.bind(this)) ;
          }

ngOnInit() {
    this.projects = [];
    this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        console.log(params);
        this.ID = params.id;

        //Post
      this.getprojectID();
      this.getJobID();
    });
}

}

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
  projects = [];
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


  getProjectId(){
    this.httpClient.get(environment.endpoint + `projects/` + this.ID).subscribe(
      (data: any[]) => {
        this.projects = data;
        
        console.log(this.projects);
        // this.techs = data.tech;
       // this.projectphotos = data.photoarray;
      }
    )
  }

ngOnInit() {
    this.projects = [];
    this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        console.log(params);
        this.ID = params.id;

        //Post
      this.getProjectId();
      this.getJobID();
    });
}

}

import { Component, OnInit } from '@angular/core';
import { HomePostService } from '../homepost.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
declare var jquery:any;
declare var $ :any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomePostService]
})
export class HomeComponent implements OnInit {

    posts:Array<any> = [];
    projects = [];

    constructor(private httpClient:HttpClient,
      ) {

    }

    getProfile(){
      this.httpClient.get(environment.endpoint +'projects/').subscribe(
        (data: any[]) => {
          this.projects = data;
          console.log(this.projects);
        }
      )
    }

    ngOnInit() {
      this.getProfile();
        var $btns = $('.tech').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(950);
  } else {
    var $el = $('.' + this.id).fadeIn(950);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})

}
    
}

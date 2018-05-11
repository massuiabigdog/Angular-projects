import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { hammerjs} from 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [],
})

export class AppComponent {

  constructor() { }

  ngOnInit() {
    // const sampleUrl = 'http://slowwly.robertomurray.co.uk/delay/6000/url/https://jsonplaceholder.typicode.com/posts/1';

    // this.progressService.start();
    // setTimeout(() => {
    //   this.progressService.set(0.1);
    // }, 1000);
    // setTimeout(() => {
    //   this.progressService.inc(0.2);
    // }, 2000);
    // this.http.get(sampleUrl)
    //   .subscribe((response) => {
    //     this.progressService.done();
    //     this.posts = response.json();
    //   });
  }

}



// export class AppComponent implements OnInit {

//   projects = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get('http://localhost/projects/wordpress/wp-json/wp/v2/projects').subscribe( data => {
//       for(let key in data){
//         if(data.hasOwnProperty(key)){
//           this.projects.push(data[key]);
//         }
//       }

//       console.log(this.projects);
//     })

//   }
// }


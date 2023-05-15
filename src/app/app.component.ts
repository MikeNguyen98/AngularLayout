import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators'
import { Constant } from './const/constant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  data:any;
	readonly CONSTANT = Constant
  constructor() {
     this.data = "";
     this.title = "Using RxJs with Angular";
     let a = this.getData();
  }

  getData() {
     const response =
     ajax('https://jsonplaceholder.typicode.com/users')
        .pipe(map(e => e.response));
     response.subscribe(res => {
        console.log(res);
        this.data = res;
     });
  }
  
}
import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators'
import { Constant } from './const/constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  data:any;
  url: string = "";
	readonly CONSTANT = Constant
  constructor(private router : Router) {
  }
  public href: string = "";
  ngOnInit(): void {
     console.log(this.router.url)
  }
}
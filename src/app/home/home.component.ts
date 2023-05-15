import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(
		private router: Router
	){}
	responsiveOptions: any[] = [];
	products: any[] = [];
	ngOnInit(): void {
		this.products = [
			{
				name: "Built Business Intelligence Dashboards for various Accounting Firms",
				img: "ảnh",
				link: "https://google.com"
			},
			{
				name: "Automated Data Sync between Certify and MIP for a Non-Profit Organization",
				img: "ảnh",
				link: "https://google.com"
			},
			{
				name: "Synchronized ERP system with Project Management System for a Mid-size CPA firm​",
				img: "ảnh",
				link: "https://google.com"
			},
			{
				name: "Built Business Intelligence Dashboards for various Accounting Firms",
				img: "ảnh",
				link: "https://google.com"
			},
			{
				name: "Automated Data Sync between Certify and MIP for a Non-Profit Organization",
				img: "ảnh",
				link: "https://google.com"
			},
			{
				name: "Synchronized ERP system with Project Management System for a Mid-size CPA firm​",
				img: "ảnh",
				link: "https://google.com"
			},
		]
		this.responsiveOptions = [
			{
				breakpoint: '1199px',
				numVisible: 1,
				numScroll: 1
			},
			{
				breakpoint: '991px',
				numVisible: 2,
				numScroll: 1
			},
			{
				breakpoint: '767px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}
	contactUs(){
		console.log('1 ', );
		this.router.navigateByUrl('/the-archery')
	}
}

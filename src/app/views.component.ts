import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit{
	constructor(private http: HttpClient) {}
	private users:any;
	// Load data ones componet is ready
	ngOnInit() {
		this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
			// Read the result field from the JSON response.
			this.users = data;
		});
	}
}

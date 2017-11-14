import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
	constructor(private http: HttpClient, private route: ActivatedRoute) {}
	private todos:any;
	private id;
	ngOnInit() {
		this.route.params.subscribe(params => {
		  this.id = +params['id']; // (+) converts string 'id' to a number
		});
		this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.id).subscribe(data => {
			this.todos = data;
			localStorage.setItem("todoslist_"+this.id, JSON.stringify(this.todos)); //Cache in localStorage
		});
	}
	
	changeStatus(todo){
		this.http.get('https://jsonplaceholder.typicode.com/todos/' + todo.id).subscribe(data => {
			// Read the result field from the JSON response.
			for(var i = 0; i< this.todos.length; i++){
				if(this.todos[i].id == todo.id){
					this.todos[i].completed = !todo.completed;
					break;
				}
			}
		});
	}
	
	deleteTodo(todo){
		this.http.get('https://jsonplaceholder.typicode.com/todos/' + todo.id).subscribe(data => {
			// Read the result field from the JSON response.
			var index = 0;
			for(var i = 0; i< this.todos.length; i++){
				if(this.todos[i].id == todo.id){
					index = i;
					break;
				}
			}
			this.todos.splice(index, 1);
		});
	}
	
	addTodo(){

	}
}

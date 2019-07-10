import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Todo} from '../../model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getallTodos().subscribe(todos => {
      this.todos = todos;
      //localStorage.setItem('token', todos.auth_token);
      console.log(todos);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Todo} from '../../model/todo.model';
import { AuthService } from '../../service/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  toggler: string= 'hidden';
  constructor( private apiService: ApiService, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/todos/all']);
    }
    this.apiService.getallTodos().subscribe(todos => {
      this.todos = todos;
      //localStorage.setItem('token', todos.auth_token);
      console.log(todos);
    });
  }
  public addTodo(todo) {
    this.apiService.createTodo(todo).subscribe(( todos=> {
      this.todos.push(todo);

      this.apiService.getallTodos().subscribe(todos => {
        this.todos = todos;
        //localStorage.setItem('token', todos.auth_token);
        console.log(todos);
      });
      }
    ));
  }
  public onTodosDelete(id) {
    this.apiService.deleteTodo(id).subscribe( todo => {
      this.apiService.getallTodos().subscribe(todos => {
        this.todos = todos;
      });
    });
  }

}

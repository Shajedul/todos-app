import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo.model';
import {ApiService} from '../../service/api.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-all-todos',
  templateUrl: './view-all-todos.component.html',
  styleUrls: ['./view-all-todos.component.css']
})
export class ViewAllTodosComponent implements OnInit {
  todos;
  todo: Todo;
  userId: number;
  delete_todo;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userId = parseInt(this.authService.getuserId());
    }
    this.apiService.allTodos().subscribe(todos => {
      this.todos = todos;
      //localStorage.setItem('token', todos.auth_token);
      console.log(todos);
      console.log(this.userId);
    });
    this.mkjson();
  }
  mkjson() {
    const a = [];
    let i = 0;
    this.todos.forEach(todo => {
      a[i] = todo.created_by;
      i++;
    });
    console.log(a);
  }
  onTodosDelete(id) {
    this.apiService.deleteTodo(id).subscribe( todo => {
      this.apiService.allTodos().subscribe(todos => {
        this.todos = todos;
      });
    });
  }
  public setTodo(todo_id) {
    this.delete_todo = todo_id;
  }
  public getUserName(id) {
    this.authService.getUserName(id).subscribe(names => {
      console.log(names);
    });
  }


}

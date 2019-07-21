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
  todos: Todo[];
  todo: Todo;
  userId: number;

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
  }
  onTodosDelete(id) {
    const r = confirm('Are you sure to delete this item?');
    if (r) {
      this.apiService.deleteTodo(id).subscribe( todo => {
        this.apiService.allTodos().subscribe(todos => {
          this.todos = todos;
        });
      });
    } else {
      window.alert('action averted');
    }


  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {
  todo;
  todo_id;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const todo_id = parseInt(params.get('todo_id'));
      this.todo_id= todo_id;
      this.apiService.getTodo(todo_id).subscribe(todo => {
        this.todo = todo;
      });
    });
  }

  public updateTodo(todo) {
    this.apiService.updateTodo(this.todo_id, todo).subscribe(todo => {
      // this.apiService.getTodo(this.todo_id).subscribe(todo => {
      //   this.todo = todo;
      // });
      console.log(todo);
      this.todo = todo;
    });
  }

}

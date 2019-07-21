import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../service/api.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  todo_id: number;
  task;
  can;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.todo_id = parseInt((params.get('todo_id')));
        this.apiService.getallTasks(this.todo_id).subscribe(tasks =>{
          console.log(tasks);
          this.tasks = tasks;
        });
        // this.apiService.getTodo(this.todo_id).subscribe( task=> {
        //   this.task = task;
        //   console.log(task);
        // });
    });
    this.canAdd();
  }


  public addItem(task) {
    console.log(task);
    this.apiService.createTask(task, this.todo_id).subscribe( task =>{
      this.apiService.getallTasks(this.todo_id).subscribe(tasks =>{
        console.log(tasks);
        this.tasks = tasks;
      });
    });
  }

  public onItemDelete(todo_id, item_id) {
    const r = confirm('Are you sure to delete this item?');
    if (r) {
      this.apiService.deleteItem(todo_id, item_id).subscribe(task=> {
        this.apiService.getallTasks(this.todo_id).subscribe(tasks =>{
          console.log(tasks);
          this.tasks = tasks;
        });
      });
    } else {
      window.alert('Action reverted');
    }
  }
  public canAdd() {
    if (this.authService.isLoggedIn()) {
      const id = this.authService.getuserId();
      this.apiService.getTodo(this.todo_id).subscribe(todo=>{
        console.log('todo: ', todo);
        if (id == todo.created_by) {
          console.log('true');
          this.can = true;
        } else {
          this.can = false;
        }
      });
    } else {
      this.can = false;
    }
  }

}

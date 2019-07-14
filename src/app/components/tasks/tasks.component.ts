import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [];
  todo_id: number;
  constructor(private route: ActivatedRoute, private apiService: ApiService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.todo_id = parseInt((params.get('todo_id')));
        this.apiService.getallTasks(this.todo_id).subscribe(tasks =>{
          console.log(tasks);
          this.tasks = tasks;
        });
        
    });
  }


  addItem(task) {
    console.log(task);
    this.apiService.createTask(task, this.todo_id).subscribe( task =>{
      this.apiService.getallTasks(this.todo_id).subscribe(tasks =>{
        console.log(tasks);
        this.tasks = tasks;
      });
    })
  }

}

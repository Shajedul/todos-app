import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {

  item;
  item_id;
  todo_id;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=> {
      this.todo_id= params.get('todo_id');
      this.item_id= params.get('item_id');
      console.log(this.todo_id);
    });
    this.apiService.getItem(this.todo_id, this.item_id).subscribe(item => {
      this.item = item;
      console.log(this.item);
    });
  }

  updateItem(task) {
    this.apiService.updateItem(this.todo_id, this.item_id, task).subscribe( task =>{
      this.apiService.getItem(this.todo_id,this.item_id).subscribe(item =>{
        console.log(item);
        this.item = item;
      });
    })
  }

}

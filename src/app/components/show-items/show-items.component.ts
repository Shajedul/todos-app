import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  todo_id;
  item_id;
  item;

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

}

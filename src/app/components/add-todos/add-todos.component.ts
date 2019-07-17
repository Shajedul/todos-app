import {Component, OnInit, Output, Input} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  @Input() title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onSubmit() {
    const todo = {
      title: this.title,
    };

    this.addTodo.emit(todo);
    this.title = '';

  }

}

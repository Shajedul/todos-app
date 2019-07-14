import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  name: string;
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  onSubmit() {
    const task = {
      name: this.name,
      done: false,
    }
    this.addItem.emit(task);
    this.name = '';

  }

}

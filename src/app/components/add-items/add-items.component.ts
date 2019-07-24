import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  @Input() name: string;
  @Input() done: Boolean= false;
  @Output() addItem: EventEmitter<any> = new EventEmitter();
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.name) {
      const newItem = {
        name: this.name,
        done: this.done,
        description: this.description
      };
      this.addItem.emit(newItem);
      this.name = '';
      this.description= '';
    } else {
      window.alert('Input can not be Empty');
    }
  }

}

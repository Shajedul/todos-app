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
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    const newItem = {
      name: this.name,
      done: this.done
    }
    this.addItem.emit(newItem);
  }

}

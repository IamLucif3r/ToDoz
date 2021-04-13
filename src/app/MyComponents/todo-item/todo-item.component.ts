import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();
 
  constructor() { }
 
  ngOnInit(): void {
  }
  onClick(todo: todo){
    this.todoDelete.emit(todo);
 
  }
  onCheckboxClick(todo){
    this.todoCheckbox.emit(todo)
  }
}

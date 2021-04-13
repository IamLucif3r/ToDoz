import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      sno: 8,
      title: this.title,
      desc: this.desc,
      active:true
  }
  this.todoAdd.emit(todo);
}

}

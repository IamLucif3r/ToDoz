import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const todo = { sno: 8, ...form.value, active: true };
    this.todoAdd.emit(todo);

    form.reset();
  }
}

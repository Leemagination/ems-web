import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-list.component';
import { hashFnv32a } from 'src/app/share/function/hashUtil';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() CancelEvent = new EventEmitter<any>();
  @Output() OkEvent = new EventEmitter<any>();
  todoParams = {
    list: [],
    todoContent: '',
    todoDate: null,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  clickOk() {
    if (this.todoParams.todoContent.trim() && this.todoParams.todoDate) {
      const myTodoListStr = localStorage.getItem('myTodoList');
      let myTodoList: { [propName: string]: TodoItem };
      const obj = {};
      obj[hashFnv32a(this.todoParams.todoContent.trim() + this.todoParams.todoDate)] = {
        content: this.todoParams.todoContent.trim(),
        date: this.todoParams.todoDate,
        complete: false
      };
      if (myTodoListStr) {
        myTodoList = JSON.parse(myTodoListStr);

        Object.assign(myTodoList, obj);
      } else {
        myTodoList = obj;
      }
      localStorage.setItem('myTodoList', JSON.stringify(myTodoList));
    }
    this.clear();
    this.OkEvent.emit();
  }

  clickCancel() {
    this.clear();
    this.CancelEvent.emit();
  }

  clear() {
    this.todoParams.todoContent = '';
    this.todoParams.todoDate = null;
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-list.component';

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
      obj[this.hashFnv32a(this.todoParams.todoContent.trim() + this.todoParams.todoDate)] = {
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

  hashFnv32a(str, asString?, seed?) {//生成hash值
    let i;
    let l;
    let hval = (seed === undefined) ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i++) {
      // tslint:disable-next-line:no-bitwise
      hval ^= str.charCodeAt(i);
      // tslint:disable-next-line:no-bitwise
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if (asString) {
      // Convert to 8 digit hex string
      // tslint:disable-next-line:no-bitwise
      return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
    }
    // tslint:disable-next-line:no-bitwise
    return hval >>> 0;
  }

}

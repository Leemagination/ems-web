import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../core/services/utility.service';

export interface TodoItem {
  content: string;
  date: Date;
  complete: boolean;
  id?: string;
  edit?: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(public utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoList = [];
    const todoList: { [propName: string]: TodoItem } = JSON.parse(localStorage.getItem('myTodoList'));
    for (const key in todoList) {
      if (this.todoList.length) {
        let i;
        for (i = 0; i < this.todoList.length; i++) {
          if (new Date(todoList[key].date).getTime() < new Date(this.todoList[i].date).getTime()) {
            break;
          }
        }
        this.todoList.splice(i, 0, {
          content: todoList[key].content,
          date: todoList[key].date,
          complete: todoList[key].complete,
          id: key
        });
      } else {
        this.todoList.push({
          content: todoList[key].content,
          date: todoList[key].date,
          complete: todoList[key].complete,
          id: key
        });
      }
    }
  }

  handleDate(date) {
    return this.utilityService.formatDate(new Date(date).getTime());
  }

  saveTodo() {
    const todo: { [propName: string]: TodoItem } = {};
    this.todoList.forEach(item => {
      todo[item.id] = {
        date: item.date,
        content: item.content,
        complete: item.complete
      };
    });
    localStorage.setItem('myTodoList', JSON.stringify(todo));
    //this.getTodoList()
  }

  deleteTodo(index) {
    this.todoList.splice(index, 1);
    this.saveTodo();
  }

  checkTime(todo: TodoItem) {
    return !todo.complete && (new Date(todo.date).getTime() < new Date().getTime());
  }

  nearTime(todo: TodoItem) {
    if (todo.complete) {
      return false;
    }
    const time = new Date(todo.date).getTime() - new Date().getTime();
    return time > 0 && time < 1000 * 60 * 60 * 6;
  }

}

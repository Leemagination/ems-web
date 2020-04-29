import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageChangeModalComponent } from './components/language-change-modal/language-change-modal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/todo-list/add-todo/add-todo.component';


@NgModule({
  declarations: [LanguageChangeModalComponent, TodoListComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    TranslateModule,
    LanguageChangeModalComponent,
    TodoListComponent,
    AddTodoComponent
  ]
})
export class ShareModule {
}

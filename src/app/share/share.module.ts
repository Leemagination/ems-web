import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageChangeModalComponent } from './components/language-change-modal/language-change-modal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/todo-list/add-todo/add-todo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { ButtonAuthorityDirective } from './directives/button-authority.directive';


@NgModule({
  declarations: [LanguageChangeModalComponent, TodoListComponent, AddTodoComponent, SearchBarComponent, SearchItemComponent, ButtonAuthorityDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
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
    AddTodoComponent,
    SearchBarComponent,
    SearchItemComponent,
    ButtonAuthorityDirective
  ]
})
export class ShareModule {
}

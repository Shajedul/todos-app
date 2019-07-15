import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from '@angular/common/http';
import { RouterModule, } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import {InterceptorService} from './service/interceptor.service';
import { AddTodosComponent } from './components/add-todos/add-todos.component';
import {FormsModule} from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ShowTodoComponent } from './components/show-todo/show-todo.component';
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { EditItemsComponent } from './components/edit-items/edit-items.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    AddTodosComponent,
    AboutComponent,
    TasksComponent,
    ShowTodoComponent,
    ShowItemsComponent,
    AddItemsComponent,
    EditItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

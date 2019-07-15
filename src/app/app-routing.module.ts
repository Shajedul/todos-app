import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';
import {AboutComponent} from "./components/about/about.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import { ShowTodoComponent } from './components/show-todo/show-todo.component';
import { ShowItemsComponent } from './components/show-items/show-items.component';
import { EditItemsComponent } from './components/edit-items/edit-items.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [ {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tasks/:todo_id/items', component: TasksComponent},
  {path: 'tasks/:todo_id', component: ShowTodoComponent },
  {path: 'todos/:todo_id/items/:item_id', component: ShowItemsComponent},
  {path: 'todos/:todo_id/items/:item_id/edit', component: EditItemsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
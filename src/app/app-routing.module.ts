import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './components/todos/todos.component';
import {AboutComponent} from "./components/about/about.component";
import {TasksComponent} from "./components/tasks/tasks.component";

const routes: Routes = [ {path: '', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tasks/:todo_id/items', component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

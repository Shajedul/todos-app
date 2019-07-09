import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Api-Token': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNTYyNjcxOTYzfQ.Sse1V9lP3yrcTFt3JdxNrRaTlhc8yZelciTfubbG5Dg'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUrl: string = 'http://localhost:3000/todos';
  constructor(private httpClient: HttpClient) { }

  public getallTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.getUrl);
  }
  public getTodo(todo: Todo) {

  }
  public editTodo(todo: Todo) {

  }
  public deleteTodo(todo: Todo) {

  }
  public createTodo(todo: Todo) {

  }
}

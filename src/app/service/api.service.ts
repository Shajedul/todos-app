import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNTYyNjcxOTYzfQ.Sse1V9lP3yrcTFt3JdxNrRaTlhc8yZelciTfubbG5Dg'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUrl: string = 'http://localhost:3000/todos';
  constructor(private httpClient: HttpClient) { }

  public getallTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.getUrl, httpOptions);
  }
  public getTodo(): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.getUrl}/7`, httpOptions);
  }
  public editTodo(): Observable<Todo> {
    const todo = {
      title: 'Nala'
    };
    return this.httpClient.put<Todo>(`${this.getUrl}/8`, todo, httpOptions);
  }
  public deleteTodo(): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${this.getUrl}/10`, httpOptions);
  }
  // Create Todo
  public createTodo(): Observable<Todo> {
    const todo = {
      title: 'Bruce Wayne',
    };
    return this.httpClient.post<Todo>(this.getUrl, todo, httpOptions);

  }
}

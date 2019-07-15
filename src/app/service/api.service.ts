import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMCwiZXhwIjoxNTYyODI3MDg4fQ.WYBDVHzU4Q8vYm0THHF_r1NKeXsp1_XHN511qJNbSgA'
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
  public getTodo(id): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.getUrl}/${id}`, httpOptions);
  }
  public editTodo(): Observable<Todo> {
    const todo = {
      title: 'Nala'
    };
    return this.httpClient.put<Todo>(`${this.getUrl}/8`, todo, httpOptions);
  }
  public deleteTodo(id): Observable<any> {
    console.log(`${this.getUrl}/${id}`);
    return this.httpClient.delete<any>(`${this.getUrl}/${id}`, httpOptions);
  }
  // Create Todo
  public createTodo(todo): Observable<Todo> {
    // const todo = {
    //   title: 'Bruce Wayne',
    // };
    return this.httpClient.post<Todo>(this.getUrl, todo, httpOptions);
  }
  public login(): Observable<any> {
    const userData = {
      email: 'shajedul@gmail.com',
      password: 'shajedul'
    };
    return this.httpClient.post<any>('http://localhost:3000/auth/login', userData);
  }
  public signup(signupData): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/signup', signupData);
  }
  public getToken() {
    return localStorage.getItem('token');
  }
  public getallTasks(todo_id): Observable<any> {
    return this.httpClient.get<any>(`${this.getUrl}/${todo_id}/items`)
  }
  public createTask(task, todo_id): Observable<any> {
    return this.httpClient.post<any>(`${this.getUrl}/${todo_id}/items`, task);
  }
  public updateTodo(id, todo): Observable<any> {
    return this.httpClient.put<any>(`${this.getUrl}/${id}`, todo );
  }
  public getItem(todo_id, item_id): Observable<any> {
    return this.httpClient.get<any>(`${this.getUrl}/${todo_id}/items/${item_id}`);
  }

  public updateItem(todo_id, item_id, newItem) {
    return this.httpClient.put<any>(`${this.getUrl}/${todo_id}/items/${item_id}`, newItem)
  }
  public deleteItem(todo_id,item_id): Observable<any> {
    return this.httpClient.delete<any>(`${this.getUrl}/${todo_id}/items/${item_id}`)
  }
}

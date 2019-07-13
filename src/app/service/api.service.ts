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
  public signup(): Observable<any> {
    const signupData = {
      email: 'romel@gmail.com',
      name: 'Romel',
      password: 'romel',
      password_confirmation: 'romel',
      role: 'admin',
    };
    return this.httpClient.post<any>('http://localhost:3000/signup', signupData);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}

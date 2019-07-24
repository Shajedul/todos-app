import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../model/todo.model';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = 'http://localhost:3000';
  decoded: any;
  id: string;
  constructor(private http: HttpClient) { }


  login(emaildata: string, passworddata: string) {
    const loginData = {
      email: emaildata,
      password: passworddata,
    };
    return this.http.post<any>(`${this.rootUrl}/auth/login`, loginData).subscribe(res => {
     const exp = this.decodeJWT(res);
     this.setSession(exp, res);
    });
  }
  decodeJWT(res) {
    this.decoded = jwt_decode(res.auth_token);
    this.id = this.decoded.user_id;
    console.log(this.id);
    const exp = parseInt(this.decoded.exp);
    return exp;
  }
  setSession(exp, res) {
    const expiresAt = moment().add(exp, 'second' );
    localStorage.setItem('token', res.auth_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  getuserId() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    this.id = decoded.user_id;
    return this.id;
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    return;
  }
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    //console.log(moment(expiresAt));
    return moment(expiresAt);
  }
  getUserName(id): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}/users`, id );
  }
}

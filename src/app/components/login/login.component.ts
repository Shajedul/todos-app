import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
  public onSubmit()
  {
    return this.apiService.login(this.email, this.password).subscribe(key =>{
      console.log(key);
      localStorage.setItem('token', key.auth_token);
    });
    //console.log(this.email);
  }

}

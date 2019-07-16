import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {

  }
  public onSubmit()
  {
    return this.apiService.login(this.email, this.password).subscribe(key =>{
      console.log(key);
      localStorage.setItem('token', key.auth_token);
      this.router.navigate(['/']);
    });
    //console.log(this.email);
  }

}

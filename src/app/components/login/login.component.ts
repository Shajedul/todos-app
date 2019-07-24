import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }
  public onSubmit() {
    // return this.apiService.login(this.email, this.password).subscribe(key =>{
    //   console.log(key);
    //   localStorage.setItem('token', key.auth_token);
    //   this.router.navigate(['/']);
    // });
    //console.log(this.email);
    this.authService.login(this.email, this.password);
    setTimeout(res => {
      if (!this.authService.isLoggedIn()) {
        window.alert('Successfully Logged in')
        this.router.navigate(['/']);
      } else {
        window.alert('Invalid Login. Please Try again');
        this.email = '';
        this.password = '';
        this.router.navigate(['/login']);
      }
    }, 1500);
  }

}

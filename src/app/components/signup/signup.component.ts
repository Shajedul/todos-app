import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  messege: string;
  constructor( private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }
  public onSubmit() {
    const signUpData = {
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation,
      role: this.role,
    }
    this.apiService.signup(signUpData).subscribe(res =>{
      localStorage.setItem('token', res.auth_token);
      this.router.navigate(['/']);
    });


  }

}

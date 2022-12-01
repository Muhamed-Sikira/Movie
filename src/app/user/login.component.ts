import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'ml-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  pageTitle = 'Log In';
  errorMessage!: string;
  constructor(private authService: AuthService,
              private router: Router) {}
  login(loginForm: NgForm){
    if (loginForm && loginForm.valid){
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);
      this.router.navigate(['/movie'])
    } else{
      this.errorMessage = 'Please enter a user name and password'
    }
  }
}

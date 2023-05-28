import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LoginRequestPayload } from './login-request.payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload = { username: '', password: '' };
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])
    });
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;

    this.userService.login(this.loginRequestPayload).subscribe((data) => {
      this.router.navigateByUrl('/home-page');
    }, error => {
      throwError(error);
    })
  }

  // login() {
  //   const username = this.loginForm.get('username')?.value;
  //   const password = this.loginForm.get('password')?.value;
  
  //   this.userService.loginUser({ username, password }).subscribe(
  //     (data) => {
  //       this.router.navigateByUrl('/first-page');
  //     },
  //     (error) => {
  //       throwError(error);
  //     }
  //   );
  // }

  // login() {
  //   this.userService.loginUser(this.loginData).subscribe(
  //     (response: HttpResponse<LoginResponse>) => {
  //       localStorage.setItem('token', response.body.token);
  //       console.log('response', response);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error => {
  //       console.log('error', error);
  //       const errorMessage = error.error.message;
  //       console.log('errorMessage', errorMessage);
  //     }
  //   );
  // }

}

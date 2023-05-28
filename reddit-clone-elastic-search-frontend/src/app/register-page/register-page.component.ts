import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerData = new User();
  serverError = '';
  isFormValid = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  register(registerForm) {
    this.isFormValid = registerForm.valid;
    if (registerForm.valid) {
      this.userService.registerUser(this.registerData).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/login']);
        },
        error => {
          this.isFormValid = false;
          console.log(error);
          this.serverError = error.error.message;
        }
      );
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  
  constructor(private http: HttpClient, private userService: UserService) {
  
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

  getProfileInfo() {
    this.userService.getProfileInfo().subscribe(
      (data: any) => {
        this.user = data;
        console.log(data.token);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

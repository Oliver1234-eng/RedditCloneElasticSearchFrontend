import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-name-and-user',
  templateUrl: './find-community-by-name-and-user.component.html',
  styleUrls: ['./find-community-by-name-and-user.component.css']
})
export class FindCommunityByNameAndUserComponent implements OnInit {

  name: string;
  user: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByNameAndUser(name: string, user: string): void {
    this.communityService.getCommunityDocumentsByNameAndUser(name, user)
      .subscribe(
        (data: any[]) => {
          this.searchResults = data;
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

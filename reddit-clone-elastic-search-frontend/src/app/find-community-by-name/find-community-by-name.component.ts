import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-name',
  templateUrl: './find-community-by-name.component.html',
  styleUrls: ['./find-community-by-name.component.css']
})
export class FindCommunityByNameComponent implements OnInit {

  searchTerm: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.communityService.searchCommunityByName(this.searchTerm)
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

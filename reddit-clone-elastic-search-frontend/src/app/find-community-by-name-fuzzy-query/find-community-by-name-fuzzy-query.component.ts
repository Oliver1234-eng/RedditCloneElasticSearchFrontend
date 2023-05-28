import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-name-fuzzy-query',
  templateUrl: './find-community-by-name-fuzzy-query.component.html',
  styleUrls: ['./find-community-by-name-fuzzy-query.component.css']
})
export class FindCommunityByNameFuzzyQueryComponent implements OnInit {

  searchTerm: string;
  user: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByName(): void {
    this.communityService.getCommunityByNameFuzzyQuery(this.searchTerm)
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-post-count-greater-than',
  templateUrl: './find-community-by-post-count-greater-than.component.html',
  styleUrls: ['./find-community-by-post-count-greater-than.component.css']
})
export class FindCommunityByPostCountGreaterThanComponent implements OnInit {

  postCount: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByPostCount(postCount: number): void {
    this.communityService.getCommunityDocumentsByPostCountGreaterThan(postCount)
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

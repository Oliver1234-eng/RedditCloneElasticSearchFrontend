import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-post-count',
  templateUrl: './find-community-by-post-count.component.html',
  styleUrls: ['./find-community-by-post-count.component.css']
})
export class FindCommunityByPostCountComponent implements OnInit {

  postCount1: number;
  postCount2: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByPostCount(postCount1: number, postCount2: number): void {
    this.communityService.getCommunityDocumentsByPostCount(postCount1, postCount2)
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

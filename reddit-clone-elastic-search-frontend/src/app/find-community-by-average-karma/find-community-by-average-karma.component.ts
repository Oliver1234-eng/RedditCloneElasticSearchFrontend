import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-average-karma',
  templateUrl: './find-community-by-average-karma.component.html',
  styleUrls: ['./find-community-by-average-karma.component.css']
})
export class FindCommunityByAverageKarmaComponent implements OnInit {

  averageKarma1: number;
  averageKarma2: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByAverageKarma(averageKarma1: number, averageKarma2: number): void {
    this.communityService.getCommunityDocumentsByAverageKarma(averageKarma1, averageKarma2)
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-average-karma-less-than',
  templateUrl: './find-community-by-average-karma-less-than.component.html',
  styleUrls: ['./find-community-by-average-karma-less-than.component.css']
})
export class FindCommunityByAverageKarmaLessThanComponent implements OnInit {

  averageKarma: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByAverageKarma(averageKarma: number): void {
    this.communityService.getCommunityDocumentsByAverageKarmaLessThan(averageKarma)
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

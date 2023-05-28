import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-find-community-by-description-phrase-query',
  templateUrl: './find-community-by-description-phrase-query.component.html',
  styleUrls: ['./find-community-by-description-phrase-query.component.css']
})
export class FindCommunityByDescriptionPhraseQueryComponent implements OnInit {

  searchDescription: string;
  searchResults: any[];

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {
  }

  searchByDescription(): void {
    this.communityService.getCommunityByDescriptionPhraseQuery(this.searchDescription)
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

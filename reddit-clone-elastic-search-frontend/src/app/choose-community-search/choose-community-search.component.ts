import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-community-search',
  templateUrl: './choose-community-search.component.html',
  styleUrls: ['./choose-community-search.component.css']
})
export class ChooseCommunitySearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

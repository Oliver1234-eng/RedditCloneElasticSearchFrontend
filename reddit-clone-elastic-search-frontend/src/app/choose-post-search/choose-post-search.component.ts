import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-post-search',
  templateUrl: './choose-post-search.component.html',
  styleUrls: ['./choose-post-search.component.css']
})
export class ChoosePostSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

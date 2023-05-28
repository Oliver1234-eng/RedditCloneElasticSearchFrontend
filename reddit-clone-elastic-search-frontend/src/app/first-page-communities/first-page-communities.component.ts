import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-page-communities',
  templateUrl: './first-page-communities.component.html',
  styleUrls: ['./first-page-communities.component.css']
})
export class FirstPageCommunitiesComponent implements OnInit {

  communities: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/communities').subscribe(data => {
      this.communities = data;
    });
  }

}

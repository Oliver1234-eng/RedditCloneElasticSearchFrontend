import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/posts').subscribe((data: any[]) => {
      console.log(data);
      this.posts = data;
    });
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

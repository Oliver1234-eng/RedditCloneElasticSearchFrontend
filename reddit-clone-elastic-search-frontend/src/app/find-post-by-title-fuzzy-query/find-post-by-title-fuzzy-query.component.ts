import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-title-fuzzy-query',
  templateUrl: './find-post-by-title-fuzzy-query.component.html',
  styleUrls: ['./find-post-by-title-fuzzy-query.component.css']
})
export class FindPostByTitleFuzzyQueryComponent implements OnInit {

  searchTerm: string;
  user: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByTitle(): void {
    this.postService.getPostByTitleFuzzyQuery(this.searchTerm)
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

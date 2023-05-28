import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-karma-greater-than',
  templateUrl: './find-post-by-karma-greater-than.component.html',
  styleUrls: ['./find-post-by-karma-greater-than.component.css']
})
export class FindPostByKarmaGreaterThanComponent implements OnInit {

  karma: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByKarma(karma: number): void {
    this.postService.getPostDocumentsByKarmaGreaterThan(karma)
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-karma-less-than',
  templateUrl: './find-post-by-karma-less-than.component.html',
  styleUrls: ['./find-post-by-karma-less-than.component.css']
})
export class FindPostByKarmaLessThanComponent implements OnInit {

  karma: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByKarma(karma: number): void {
    this.postService.getPostDocumentsByKarmaLessThan(karma)
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

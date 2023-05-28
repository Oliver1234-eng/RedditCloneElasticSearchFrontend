import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-karma',
  templateUrl: './find-post-by-karma.component.html',
  styleUrls: ['./find-post-by-karma.component.css']
})
export class FindPostByKarmaComponent implements OnInit {

  karma1: number;
  karma2: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByKarma(karma1: number, karma2: number): void {
    this.postService.getPostDocumentsByKarma(karma1, karma2)
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

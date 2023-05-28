import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-comment-count-greater-than',
  templateUrl: './find-post-by-comment-count-greater-than.component.html',
  styleUrls: ['./find-post-by-comment-count-greater-than.component.css']
})
export class FindPostByCommentCountGreaterThanComponent implements OnInit {

  commentCount: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByCommentCount(commentCount: number): void {
    this.postService.getPostDocumentsByCommentCountGreaterThan(commentCount)
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

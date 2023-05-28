import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-comment-count',
  templateUrl: './find-post-by-comment-count.component.html',
  styleUrls: ['./find-post-by-comment-count.component.css']
})
export class FindPostByCommentCountComponent implements OnInit {

  commentCount1: number;
  commentCount2: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByCommentCount(commentCount1: number, commentCount2: number): void {
    this.postService.getPostDocumentsByCommentCount(commentCount1, commentCount2)
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

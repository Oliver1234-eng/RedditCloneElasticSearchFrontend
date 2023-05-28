import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-comment-count-less-than',
  templateUrl: './find-post-by-comment-count-less-than.component.html',
  styleUrls: ['./find-post-by-comment-count-less-than.component.css']
})
export class FindPostByCommentCountLessThanComponent implements OnInit {

  commentCount: number;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByCommentCount(commentCount: number): void {
    this.postService.getPostDocumentsByCommentCountLessThan(commentCount)
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

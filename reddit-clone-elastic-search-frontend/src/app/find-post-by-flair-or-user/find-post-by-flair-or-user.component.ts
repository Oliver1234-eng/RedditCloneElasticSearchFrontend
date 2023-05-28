import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-flair-or-user',
  templateUrl: './find-post-by-flair-or-user.component.html',
  styleUrls: ['./find-post-by-flair-or-user.component.css']
})
export class FindPostByFlairOrUserComponent implements OnInit {

  flair: string;
  user: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByFlairOrUser(flair: string, user: string): void {
    this.postService.getPostDocumentsByFlairOrUser(flair, user)
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

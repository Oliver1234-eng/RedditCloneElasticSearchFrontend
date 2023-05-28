import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-text',
  templateUrl: './find-post-by-text.component.html',
  styleUrls: ['./find-post-by-text.component.css']
})
export class FindPostByTextComponent implements OnInit {

  searchTerm: string;
  searchResults: any[];

  constructor(private router: Router, private http: HttpClient, private postService: PostService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.postService.searchPostByText(this.searchTerm)
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

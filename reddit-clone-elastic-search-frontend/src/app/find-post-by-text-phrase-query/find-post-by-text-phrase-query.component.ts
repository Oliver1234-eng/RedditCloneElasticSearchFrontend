import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-find-post-by-text-phrase-query',
  templateUrl: './find-post-by-text-phrase-query.component.html',
  styleUrls: ['./find-post-by-text-phrase-query.component.css']
})
export class FindPostByTextPhraseQueryComponent implements OnInit {

  searchText: string;
  searchResults: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  searchByText(): void {
    this.postService.getPostByTextPhraseQuery(this.searchText)
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

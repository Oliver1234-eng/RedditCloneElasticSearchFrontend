import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.css']
})
export class AddNewCommentComponent implements OnInit {

  postData: any = {};
  postForm: FormGroup;

  constructor(private postService: PostService, private router: Router) {
    this.postForm = new FormGroup({
      text: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      postId: new FormControl(0, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  addComment(): void {
    this.postService.addComment(this.postData)
      .subscribe(
        response => {
          this.router.navigate(['/home-page']);
          console.log('Comment added successfully:', response);
        },
        error => {
          console.error('Error adding comment:', error);
        }
      );
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

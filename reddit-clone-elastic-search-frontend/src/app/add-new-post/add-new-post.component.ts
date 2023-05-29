import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  postData: any = {};
  postForm: FormGroup;

  constructor(private postService: PostService, private router: Router) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      flair: new FormControl('', Validators.required),
      community: new FormControl('', Validators.required),
      commentCount: new FormControl(0, Validators.required),
      karma: new FormControl(0, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addPost(): void {
    this.postService.addPost(this.postData)
      .subscribe(
        response => {
          this.router.navigate(['/home-page']);
          console.log('Post added successfully:', response);
        },
        error => {
          console.error('Error adding post:', error);
        }
      );
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }
}

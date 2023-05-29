import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-post-pdf',
  templateUrl: './add-new-post-pdf.component.html',
  styleUrls: ['./add-new-post-pdf.component.css']
})
export class AddNewPostPdfComponent implements OnInit {

  formData: FormData = new FormData();
  pdfFile: File | null = null;
  user: string = '';
  flair: string = '';
  community: string = '';
  commentCount: number = 0;
  karma: number = 0;
  postData: any = {};
  postForm: FormGroup;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      user: new FormControl('', Validators.required),
      flair: new FormControl('', Validators.required),
      community: new FormControl('', Validators.required),
      commentCount: new FormControl(null, Validators.required),
      karma: new FormControl(null, Validators.required)
    });
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.pdfFile = files.item(0);
      this.formData.append('files', this.pdfFile);
    }
  }

  addCommunity() {
    this.formData.append('user', this.user);
    this.formData.append('flair', this.flair);
    this.formData.append('community', this.community);
    this.formData.append('commentCount', String(this.commentCount));
    this.formData.append('karma', String(this.karma));
    this.postService.addPostWithPDF(this.formData)
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

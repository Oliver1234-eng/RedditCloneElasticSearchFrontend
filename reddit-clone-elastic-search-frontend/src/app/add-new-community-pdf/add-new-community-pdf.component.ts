import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../services/community.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-community-pdf',
  templateUrl: './add-new-community-pdf.component.html',
  styleUrls: ['./add-new-community-pdf.component.css']
})
export class AddNewCommunityPdfComponent implements OnInit {

  formData: FormData = new FormData();
  pdfFile: File | null = null;
  rules: string = '';
  suspendedReason: string = '';
  user: string = '';
  postCount: number = 0;
  averageKarma: number = 0;
  communityData: any = {};
  communityForm: FormGroup;

  constructor(private communityService: CommunityService, private router: Router) { }

  ngOnInit(): void {
    this.communityForm = new FormGroup({
      rules: new FormControl('', Validators.required),
      suspendedReason: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      postCount: new FormControl(null, Validators.required),
      averageKarma: new FormControl(null, Validators.required)
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
    this.formData.append('rules', this.rules);
    this.formData.append('suspendedReason', this.suspendedReason);
    this.formData.append('user', this.user);
    this.formData.append('postCount', String(this.postCount));
    this.formData.append('averageKarma', String(this.averageKarma));
    this.communityService.addCommunityWithPDF(this.formData)
      .subscribe(
        response => {
          this.router.navigate(['/home-page']);
          console.log('Community added successfully:', response);
        },
        error => {
          console.error('Error adding community:', error);
        }
      );
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
  }

}

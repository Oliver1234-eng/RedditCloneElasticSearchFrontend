import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommunityService } from '../services/community.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-community',
  templateUrl: './add-new-community.component.html',
  styleUrls: ['./add-new-community.component.css']
})
export class AddNewCommunityComponent implements OnInit {

  communityData: any = {};
  communityForm: FormGroup;

  constructor(private communityService: CommunityService, private router: Router) {
    this.communityForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      rules: new FormControl('', Validators.required),
      suspendedReason: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
      postCount: new FormControl(0, Validators.required),
      averageKarma: new FormControl(0, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addCommunity(): void {
    this.communityService.addCommunity(this.communityData)
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

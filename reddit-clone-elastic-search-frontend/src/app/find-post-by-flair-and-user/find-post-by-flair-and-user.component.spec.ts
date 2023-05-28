import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByFlairAndUserComponent } from './find-post-by-flair-and-user.component';

describe('FindPostByFlairAndUserComponent', () => {
  let component: FindPostByFlairAndUserComponent;
  let fixture: ComponentFixture<FindPostByFlairAndUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByFlairAndUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByFlairAndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

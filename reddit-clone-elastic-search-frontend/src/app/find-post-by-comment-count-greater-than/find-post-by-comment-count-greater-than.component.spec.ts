import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByCommentCountGreaterThanComponent } from './find-post-by-comment-count-greater-than.component';

describe('FindPostByCommentCountGreaterThanComponent', () => {
  let component: FindPostByCommentCountGreaterThanComponent;
  let fixture: ComponentFixture<FindPostByCommentCountGreaterThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByCommentCountGreaterThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByCommentCountGreaterThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

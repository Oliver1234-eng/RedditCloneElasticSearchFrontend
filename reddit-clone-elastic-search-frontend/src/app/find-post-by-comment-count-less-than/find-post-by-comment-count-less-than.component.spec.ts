import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByCommentCountLessThanComponent } from './find-post-by-comment-count-less-than.component';

describe('FindPostByCommentCountLessThanComponent', () => {
  let component: FindPostByCommentCountLessThanComponent;
  let fixture: ComponentFixture<FindPostByCommentCountLessThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByCommentCountLessThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByCommentCountLessThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByCommentCountComponent } from './find-post-by-comment-count.component';

describe('FindPostByCommentCountComponent', () => {
  let component: FindPostByCommentCountComponent;
  let fixture: ComponentFixture<FindPostByCommentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByCommentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByCommentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByCommentTextComponent } from './find-post-by-comment-text.component';

describe('FindPostByCommentTextComponent', () => {
  let component: FindPostByCommentTextComponent;
  let fixture: ComponentFixture<FindPostByCommentTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByCommentTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByCommentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

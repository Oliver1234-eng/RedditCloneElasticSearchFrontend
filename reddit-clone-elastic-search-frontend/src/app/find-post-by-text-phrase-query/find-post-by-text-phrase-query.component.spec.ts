import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByTextPhraseQueryComponent } from './find-post-by-text-phrase-query.component';

describe('FindPostByTextPhraseQueryComponent', () => {
  let component: FindPostByTextPhraseQueryComponent;
  let fixture: ComponentFixture<FindPostByTextPhraseQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByTextPhraseQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByTextPhraseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

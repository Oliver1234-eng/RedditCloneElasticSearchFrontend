import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByTitleFuzzyQueryComponent } from './find-post-by-title-fuzzy-query.component';

describe('FindPostByTitleFuzzyQueryComponent', () => {
  let component: FindPostByTitleFuzzyQueryComponent;
  let fixture: ComponentFixture<FindPostByTitleFuzzyQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByTitleFuzzyQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByTitleFuzzyQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

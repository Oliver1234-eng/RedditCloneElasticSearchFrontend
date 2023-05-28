import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByTitleComponent } from './find-post-by-title.component';

describe('FindPostByTitleComponent', () => {
  let component: FindPostByTitleComponent;
  let fixture: ComponentFixture<FindPostByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

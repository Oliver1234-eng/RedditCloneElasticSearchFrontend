import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByFlairComponent } from './find-post-by-flair.component';

describe('FindPostByFlairComponent', () => {
  let component: FindPostByFlairComponent;
  let fixture: ComponentFixture<FindPostByFlairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByFlairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByFlairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

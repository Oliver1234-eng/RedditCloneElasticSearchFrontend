import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByFlairOrUserComponent } from './find-post-by-flair-or-user.component';

describe('FindPostByFlairOrUserComponent', () => {
  let component: FindPostByFlairOrUserComponent;
  let fixture: ComponentFixture<FindPostByFlairOrUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByFlairOrUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByFlairOrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

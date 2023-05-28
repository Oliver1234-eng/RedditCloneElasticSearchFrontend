import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByUserComponent } from './find-post-by-user.component';

describe('FindPostByUserComponent', () => {
  let component: FindPostByUserComponent;
  let fixture: ComponentFixture<FindPostByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

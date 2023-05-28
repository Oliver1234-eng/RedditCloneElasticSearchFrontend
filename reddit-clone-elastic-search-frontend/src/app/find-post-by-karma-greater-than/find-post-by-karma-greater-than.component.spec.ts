import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByKarmaGreaterThanComponent } from './find-post-by-karma-greater-than.component';

describe('FindPostByKarmaGreaterThanComponent', () => {
  let component: FindPostByKarmaGreaterThanComponent;
  let fixture: ComponentFixture<FindPostByKarmaGreaterThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByKarmaGreaterThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByKarmaGreaterThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

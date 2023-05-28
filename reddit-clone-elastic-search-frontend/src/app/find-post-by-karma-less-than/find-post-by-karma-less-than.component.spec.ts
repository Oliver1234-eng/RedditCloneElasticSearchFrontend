import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByKarmaLessThanComponent } from './find-post-by-karma-less-than.component';

describe('FindPostByKarmaLessThanComponent', () => {
  let component: FindPostByKarmaLessThanComponent;
  let fixture: ComponentFixture<FindPostByKarmaLessThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByKarmaLessThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByKarmaLessThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

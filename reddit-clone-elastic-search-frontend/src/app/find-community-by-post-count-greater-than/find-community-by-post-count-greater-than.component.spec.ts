import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByPostCountGreaterThanComponent } from './find-community-by-post-count-greater-than.component';

describe('FindCommunityByPostCountGreaterThanComponent', () => {
  let component: FindCommunityByPostCountGreaterThanComponent;
  let fixture: ComponentFixture<FindCommunityByPostCountGreaterThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByPostCountGreaterThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByPostCountGreaterThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByPostCountLessThanComponent } from './find-community-by-post-count-less-than.component';

describe('FindCommunityByPostCountLessThanComponent', () => {
  let component: FindCommunityByPostCountLessThanComponent;
  let fixture: ComponentFixture<FindCommunityByPostCountLessThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByPostCountLessThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByPostCountLessThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByAverageKarmaLessThanComponent } from './find-community-by-average-karma-less-than.component';

describe('FindCommunityByAverageKarmaLessThanComponent', () => {
  let component: FindCommunityByAverageKarmaLessThanComponent;
  let fixture: ComponentFixture<FindCommunityByAverageKarmaLessThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByAverageKarmaLessThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByAverageKarmaLessThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

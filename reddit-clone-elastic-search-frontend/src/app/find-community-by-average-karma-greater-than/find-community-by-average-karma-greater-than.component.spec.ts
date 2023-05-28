import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByAverageKarmaGreaterThanComponent } from './find-community-by-average-karma-greater-than.component';

describe('FindCommunityByAverageKarmaGreaterThanComponent', () => {
  let component: FindCommunityByAverageKarmaGreaterThanComponent;
  let fixture: ComponentFixture<FindCommunityByAverageKarmaGreaterThanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByAverageKarmaGreaterThanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByAverageKarmaGreaterThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

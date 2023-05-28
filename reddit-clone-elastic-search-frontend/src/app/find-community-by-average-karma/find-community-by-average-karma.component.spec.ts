import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByAverageKarmaComponent } from './find-community-by-average-karma.component';

describe('FindCommunityByAverageKarmaComponent', () => {
  let component: FindCommunityByAverageKarmaComponent;
  let fixture: ComponentFixture<FindCommunityByAverageKarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByAverageKarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByAverageKarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

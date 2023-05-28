import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByNameFuzzyQueryComponent } from './find-community-by-name-fuzzy-query.component';

describe('FindCommunityByNameFuzzyQueryComponent', () => {
  let component: FindCommunityByNameFuzzyQueryComponent;
  let fixture: ComponentFixture<FindCommunityByNameFuzzyQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByNameFuzzyQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByNameFuzzyQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

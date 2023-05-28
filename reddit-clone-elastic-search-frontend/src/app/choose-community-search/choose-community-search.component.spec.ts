import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCommunitySearchComponent } from './choose-community-search.component';

describe('ChooseCommunitySearchComponent', () => {
  let component: ChooseCommunitySearchComponent;
  let fixture: ComponentFixture<ChooseCommunitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseCommunitySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCommunitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByRulesComponent } from './find-community-by-rules.component';

describe('FindCommunityByRulesComponent', () => {
  let component: FindCommunityByRulesComponent;
  let fixture: ComponentFixture<FindCommunityByRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

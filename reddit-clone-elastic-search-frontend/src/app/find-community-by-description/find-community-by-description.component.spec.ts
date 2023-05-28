import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByDescriptionComponent } from './find-community-by-description.component';

describe('FindCommunityByDescriptionComponent', () => {
  let component: FindCommunityByDescriptionComponent;
  let fixture: ComponentFixture<FindCommunityByDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByNameAndUserComponent } from './find-community-by-name-and-user.component';

describe('FindCommunityByNameAndUserComponent', () => {
  let component: FindCommunityByNameAndUserComponent;
  let fixture: ComponentFixture<FindCommunityByNameAndUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByNameAndUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByNameAndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByNameOrUserComponent } from './find-community-by-name-or-user.component';

describe('FindCommunityByNameOrUserComponent', () => {
  let component: FindCommunityByNameOrUserComponent;
  let fixture: ComponentFixture<FindCommunityByNameOrUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByNameOrUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByNameOrUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

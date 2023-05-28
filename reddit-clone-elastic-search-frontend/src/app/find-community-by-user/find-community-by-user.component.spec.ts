import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByUserComponent } from './find-community-by-user.component';

describe('FindCommunityByUserComponent', () => {
  let component: FindCommunityByUserComponent;
  let fixture: ComponentFixture<FindCommunityByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

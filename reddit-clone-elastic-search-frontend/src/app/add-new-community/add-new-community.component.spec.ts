import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCommunityComponent } from './add-new-community.component';

describe('AddNewCommunityComponent', () => {
  let component: AddNewCommunityComponent;
  let fixture: ComponentFixture<AddNewCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

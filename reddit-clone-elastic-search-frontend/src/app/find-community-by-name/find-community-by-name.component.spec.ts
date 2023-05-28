import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByNameComponent } from './find-community-by-name.component';

describe('FindCommunityByNameComponent', () => {
  let component: FindCommunityByNameComponent;
  let fixture: ComponentFixture<FindCommunityByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

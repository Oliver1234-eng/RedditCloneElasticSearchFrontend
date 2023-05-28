import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByCommunityComponent } from './find-post-by-community.component';

describe('FindPostByCommunityComponent', () => {
  let component: FindPostByCommunityComponent;
  let fixture: ComponentFixture<FindPostByCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

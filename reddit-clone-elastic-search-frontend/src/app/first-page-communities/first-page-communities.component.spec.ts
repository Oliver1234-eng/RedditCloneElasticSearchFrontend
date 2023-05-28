import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageCommunitiesComponent } from './first-page-communities.component';

describe('FirstPageCommunitiesComponent', () => {
  let component: FirstPageCommunitiesComponent;
  let fixture: ComponentFixture<FirstPageCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

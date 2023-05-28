import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByPostCountComponent } from './find-community-by-post-count.component';

describe('FindCommunityByPostCountComponent', () => {
  let component: FindCommunityByPostCountComponent;
  let fixture: ComponentFixture<FindCommunityByPostCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByPostCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByPostCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

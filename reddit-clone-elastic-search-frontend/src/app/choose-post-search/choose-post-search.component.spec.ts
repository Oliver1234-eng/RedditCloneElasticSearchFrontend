import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePostSearchComponent } from './choose-post-search.component';

describe('ChoosePostSearchComponent', () => {
  let component: ChoosePostSearchComponent;
  let fixture: ComponentFixture<ChoosePostSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePostSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

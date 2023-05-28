import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByKarmaComponent } from './find-post-by-karma.component';

describe('FindPostByKarmaComponent', () => {
  let component: FindPostByKarmaComponent;
  let fixture: ComponentFixture<FindPostByKarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByKarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByKarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

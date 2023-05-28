import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostByTextComponent } from './find-post-by-text.component';

describe('FindPostByTextComponent', () => {
  let component: FindPostByTextComponent;
  let fixture: ComponentFixture<FindPostByTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPostByTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostByTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

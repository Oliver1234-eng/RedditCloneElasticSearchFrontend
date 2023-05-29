import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPostPdfComponent } from './add-new-post-pdf.component';

describe('AddNewPostPdfComponent', () => {
  let component: AddNewPostPdfComponent;
  let fixture: ComponentFixture<AddNewPostPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPostPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPostPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

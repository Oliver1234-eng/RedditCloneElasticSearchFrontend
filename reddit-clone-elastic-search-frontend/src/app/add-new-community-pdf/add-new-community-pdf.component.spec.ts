import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCommunityPdfComponent } from './add-new-community-pdf.component';

describe('AddNewCommunityPdfComponent', () => {
  let component: AddNewCommunityPdfComponent;
  let fixture: ComponentFixture<AddNewCommunityPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCommunityPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCommunityPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

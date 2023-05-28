import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCommunityByDescriptionPhraseQueryComponent } from './find-community-by-description-phrase-query.component';

describe('FindCommunityByDescriptionPhraseQueryComponent', () => {
  let component: FindCommunityByDescriptionPhraseQueryComponent;
  let fixture: ComponentFixture<FindCommunityByDescriptionPhraseQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCommunityByDescriptionPhraseQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCommunityByDescriptionPhraseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

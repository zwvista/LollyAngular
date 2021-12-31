import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsLangDetailComponent } from './words-lang-detail.component';

describe('WordsLangDetailComponent', () => {
  let component: WordsLangDetailComponent;
  let fixture: ComponentFixture<WordsLangDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsLangDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsLangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

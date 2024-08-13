import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsTextbookDetail2Component } from './words-textbook-detail2.component';

describe('WordsTextbookDetail2Component', () => {
  let component: WordsTextbookDetail2Component;
  let fixture: ComponentFixture<WordsTextbookDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsTextbookDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsTextbookDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

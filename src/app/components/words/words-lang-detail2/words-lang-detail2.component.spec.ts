import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsLangDetail2Component } from './words-lang-detail2.component';

describe('WordsLangDetail2Component', () => {
  let component: WordsLangDetail2Component;
  let fixture: ComponentFixture<WordsLangDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsLangDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsLangDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsLang2Component } from './words-lang2.component';

describe('WordsLang2Component', () => {
  let component: WordsLang2Component;
  let fixture: ComponentFixture<WordsLang2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsLang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsLang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

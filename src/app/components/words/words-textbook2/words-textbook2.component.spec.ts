import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsTextbook2Component } from './words-textbook2.component';

describe('WordsTextbook2Component', () => {
  let component: WordsTextbook2Component;
  let fixture: ComponentFixture<WordsTextbook2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsTextbook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsTextbook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

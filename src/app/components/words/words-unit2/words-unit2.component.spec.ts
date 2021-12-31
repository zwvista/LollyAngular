import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsUnit2Component } from './words-unit2.component';

describe('WordsUnit2Component', () => {
  let component: WordsUnit2Component;
  let fixture: ComponentFixture<WordsUnit2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsUnit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsUnit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

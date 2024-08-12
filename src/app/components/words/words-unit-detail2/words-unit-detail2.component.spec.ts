import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsUnitDetail2Component } from './words-unit-detail.component';

describe('WordsUnitDetail2Component', () => {
  let component: WordsUnitDetail2Component;
  let fixture: ComponentFixture<WordsUnitDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsUnitDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsUnitDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

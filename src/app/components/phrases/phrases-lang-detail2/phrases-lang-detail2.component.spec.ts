import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesLangDetail2Component } from './phrases-lang-detail2.component';

describe('PhrasesLangDetail2Component', () => {
  let component: PhrasesLangDetail2Component;
  let fixture: ComponentFixture<PhrasesLangDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesLangDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesLangDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

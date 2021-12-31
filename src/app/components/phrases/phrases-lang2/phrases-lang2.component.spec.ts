import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesLang2Component } from './phrases-lang2.component';

describe('PhrasesLang2Component', () => {
  let component: PhrasesLang2Component;
  let fixture: ComponentFixture<PhrasesLang2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesLang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesLang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesUnit2Component } from './phrases-unit2.component';

describe('PhrasesUnit2Component', () => {
  let component: PhrasesUnit2Component;
  let fixture: ComponentFixture<PhrasesUnit2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesUnit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesUnit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

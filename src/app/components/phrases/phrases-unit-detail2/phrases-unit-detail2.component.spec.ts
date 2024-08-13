import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesUnitDetail2Component } from './phrases-unit-detail2.component';

describe('PhrasesUnitDetail2Component', () => {
  let component: PhrasesUnitDetail2Component;
  let fixture: ComponentFixture<PhrasesUnitDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesUnitDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesUnitDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

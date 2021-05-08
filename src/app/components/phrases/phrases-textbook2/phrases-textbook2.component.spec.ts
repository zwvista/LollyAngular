import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesTextbook2Component } from './phrases-textbook2.component';

describe('PhrasesTextbook2Component', () => {
  let component: PhrasesTextbook2Component;
  let fixture: ComponentFixture<PhrasesTextbook2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesTextbook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesTextbook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

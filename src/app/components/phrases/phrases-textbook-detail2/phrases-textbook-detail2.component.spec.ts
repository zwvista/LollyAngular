import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesTextbookDetail2Component } from './phrases-textbook-detail2.component';

describe('PhrasesTextbookDetail2Component', () => {
  let component: PhrasesTextbookDetail2Component;
  let fixture: ComponentFixture<PhrasesTextbookDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesTextbookDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesTextbookDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

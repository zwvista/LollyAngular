import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatternsDetail2Component } from './patterns-detail2.component';

describe('PatternsDetail2Component', () => {
  let component: PatternsDetail2Component;
  let fixture: ComponentFixture<PatternsDetail2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

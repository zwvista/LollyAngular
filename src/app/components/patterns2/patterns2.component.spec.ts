import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Patterns2Component } from './patterns2.component';

describe('Patterns2Component', () => {
  let component: Patterns2Component;
  let fixture: ComponentFixture<Patterns2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Patterns2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Patterns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

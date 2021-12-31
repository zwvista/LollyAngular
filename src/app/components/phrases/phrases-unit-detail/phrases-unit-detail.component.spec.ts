import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesUnitDetailComponent } from './phrases-unit-detail.component';

describe('PhrasesUnitDetailComponent', () => {
  let component: PhrasesUnitDetailComponent;
  let fixture: ComponentFixture<PhrasesUnitDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

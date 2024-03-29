import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesUnitComponent } from './phrases-unit.component';

describe('PhrasesUnitComponent', () => {
  let component: PhrasesUnitComponent;
  let fixture: ComponentFixture<PhrasesUnitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

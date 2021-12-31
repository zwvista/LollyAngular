import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PatternsDetailComponent } from './patterns-detail.component';

describe('PatternsDetailComponent', () => {
  let component: PatternsDetailComponent;
  let fixture: ComponentFixture<PatternsDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PatternsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

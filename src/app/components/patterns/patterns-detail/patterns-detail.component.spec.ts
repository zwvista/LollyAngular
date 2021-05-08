import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternsDetailComponent } from './patterns-detail.component';

describe('PatternsDetailComponent', () => {
  let component: PatternsDetailComponent;
  let fixture: ComponentFixture<PatternsDetailComponent>;

  beforeEach(async(() => {
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

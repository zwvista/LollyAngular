import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsUnitDetailComponent } from './words-unit-detail.component';

describe('WordsUnitDetailComponent', () => {
  let component: WordsUnitDetailComponent;
  let fixture: ComponentFixture<WordsUnitDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

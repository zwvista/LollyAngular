import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsUnitDetailComponent } from './words-unit-detail.component';

describe('WordsUnitDetailComponent', () => {
  let component: WordsUnitDetailComponent;
  let fixture: ComponentFixture<WordsUnitDetailComponent>;

  beforeEach(async(() => {
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

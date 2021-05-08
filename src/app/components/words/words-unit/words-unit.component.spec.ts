import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsUnitComponent } from './words-unit.component';

describe('WordsUnitComponent', () => {
  let component: WordsUnitComponent;
  let fixture: ComponentFixture<WordsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

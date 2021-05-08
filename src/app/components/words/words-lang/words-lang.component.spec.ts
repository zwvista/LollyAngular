import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsLangComponent } from './words-lang.component';

describe('WordsLangComponent', () => {
  let component: WordsLangComponent;
  let fixture: ComponentFixture<WordsLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

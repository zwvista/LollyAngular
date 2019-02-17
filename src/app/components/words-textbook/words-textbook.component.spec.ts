import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsTextbookComponent } from './words-textbook.component';

describe('WordsTextbookComponent', () => {
  let component: WordsTextbookComponent;
  let fixture: ComponentFixture<WordsTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

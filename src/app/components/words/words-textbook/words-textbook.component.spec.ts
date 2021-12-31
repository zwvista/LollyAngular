import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsTextbookComponent } from './words-textbook.component';

describe('WordsTextbookComponent', () => {
  let component: WordsTextbookComponent;
  let fixture: ComponentFixture<WordsTextbookComponent>;

  beforeEach(waitForAsync(() => {
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

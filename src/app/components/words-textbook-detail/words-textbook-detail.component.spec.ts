import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsTextbookDetailComponent } from './words-textbook-detail.component';

describe('WordsTextbookDetailComponent', () => {
  let component: WordsTextbookDetailComponent;
  let fixture: ComponentFixture<WordsTextbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsTextbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsTextbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

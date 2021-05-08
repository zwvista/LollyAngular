import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesTextbookComponent } from './phrases-textbook.component';

describe('PhrasesTextbookComponent', () => {
  let component: PhrasesTextbookComponent;
  let fixture: ComponentFixture<PhrasesTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

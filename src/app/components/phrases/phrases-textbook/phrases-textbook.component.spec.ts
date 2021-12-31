import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesTextbookComponent } from './phrases-textbook.component';

describe('PhrasesTextbookComponent', () => {
  let component: PhrasesTextbookComponent;
  let fixture: ComponentFixture<PhrasesTextbookComponent>;

  beforeEach(waitForAsync(() => {
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

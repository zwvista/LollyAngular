import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PhrasesTextbookDetailComponent } from './phrases-textbook-detail.component';

describe('PhrasesTextbookDetailComponent', () => {
  let component: PhrasesTextbookDetailComponent;
  let fixture: ComponentFixture<PhrasesTextbookDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesTextbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesTextbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

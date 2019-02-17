import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesTextbookDetailComponent } from './phrases-textbook-detail.component';

describe('PhrasesTextbookDetailComponent', () => {
  let component: PhrasesTextbookDetailComponent;
  let fixture: ComponentFixture<PhrasesTextbookDetailComponent>;

  beforeEach(async(() => {
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

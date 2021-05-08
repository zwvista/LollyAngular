import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesLangDetailComponent } from './phrases-lang-detail.component';

describe('PhrasesLangDetailComponent', () => {
  let component: PhrasesLangDetailComponent;
  let fixture: ComponentFixture<PhrasesLangDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesLangDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesLangDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

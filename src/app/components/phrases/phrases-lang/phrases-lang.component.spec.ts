import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesLangComponent } from './phrases-lang.component';

describe('PhrasesLangComponent', () => {
  let component: PhrasesLangComponent;
  let fixture: ComponentFixture<PhrasesLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDictComponent } from './words-dict.component';

describe('WordsDictComponent', () => {
  let component: WordsDictComponent;
  let fixture: ComponentFixture<WordsDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

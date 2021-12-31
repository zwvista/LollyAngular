import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordsDictComponent } from './words-dict.component';

describe('WordsDictComponent', () => {
  let component: WordsDictComponent;
  let fixture: ComponentFixture<WordsDictComponent>;

  beforeEach(waitForAsync(() => {
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

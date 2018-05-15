import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictBrowserComponent } from './dict-browser.component';

describe('DictBrowserComponent', () => {
  let component: DictBrowserComponent;
  let fixture: ComponentFixture<DictBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

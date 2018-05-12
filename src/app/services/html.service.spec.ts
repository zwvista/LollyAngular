import { TestBed, inject } from '@angular/core/testing';

import { HtmlService } from './html.service';

describe('HtmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlService]
    });
  });

  it('should be created', inject([HtmlService], (service: HtmlService) => {
    expect(service).toBeTruthy();
  }));
});

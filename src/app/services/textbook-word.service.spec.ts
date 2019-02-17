import { TestBed } from '@angular/core/testing';

import { TextbookWordService } from './textbook-word.service';

describe('TextbookWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextbookWordService = TestBed.get(TextbookWordService);
    expect(service).toBeTruthy();
  });
});

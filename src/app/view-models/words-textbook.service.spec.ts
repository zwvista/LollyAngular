import { TestBed } from '@angular/core/testing';

import { WordsTextbookService } from './words-textbook.service';

describe('WordsTextbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsTextbookService = TestBed.get(WordsTextbookService);
    expect(service).toBeTruthy();
  });
});

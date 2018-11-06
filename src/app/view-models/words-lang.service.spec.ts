import { TestBed } from '@angular/core/testing';

import { WordsLangService } from './words-lang.service';

describe('WordsLangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsLangService = TestBed.get(WordsLangService);
    expect(service).toBeTruthy();
  });
});

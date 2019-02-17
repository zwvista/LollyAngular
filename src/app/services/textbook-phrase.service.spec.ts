import { TestBed } from '@angular/core/testing';

import { TextbookPhraseService } from './textbook-phrase.service';

describe('TextbookPhraseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextbookPhraseService = TestBed.get(TextbookPhraseService);
    expect(service).toBeTruthy();
  });
});

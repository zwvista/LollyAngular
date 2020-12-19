import { TestBed } from '@angular/core/testing';

import { LangPhraseService } from './lang-phrase.service';

describe('LangPhraseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangPhraseService = TestBed.get(LangPhraseService);
    expect(service).toBeTruthy();
  });
});

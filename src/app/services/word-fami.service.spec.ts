import { TestBed } from '@angular/core/testing';

import { WordFamiService } from './word-fami.service';

describe('WordFamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordFamiService = TestBed.get(WordFamiService);
    expect(service).toBeTruthy();
  });
});

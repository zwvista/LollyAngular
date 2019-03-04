import { TestBed } from '@angular/core/testing';

import { WordsFamiService } from './words-fami.service';

describe('WordsFamiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsFamiService = TestBed.get(WordsFamiService);
    expect(service).toBeTruthy();
  });
});

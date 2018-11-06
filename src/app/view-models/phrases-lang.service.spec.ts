import { TestBed } from '@angular/core/testing';

import { PhrasesLangService } from './phrases-lang.service';

describe('PhrasesLangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhrasesLangService = TestBed.get(PhrasesLangService);
    expect(service).toBeTruthy();
  });
});

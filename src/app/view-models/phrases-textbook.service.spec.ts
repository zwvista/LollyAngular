import { TestBed } from '@angular/core/testing';

import { PhrasesTextbookService } from './phrases-textbook.service';

describe('PhrasesTextbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhrasesTextbookService = TestBed.get(PhrasesTextbookService);
    expect(service).toBeTruthy();
  });
});

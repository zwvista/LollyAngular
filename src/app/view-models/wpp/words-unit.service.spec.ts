import { inject, TestBed } from '@angular/core/testing';

import { WordsUnitService } from './words-unit.service';

describe('WordsUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsUnitService]
    });
  });

  it('should be created', inject([WordsUnitService], (service: WordsUnitService) => {
    expect(service).toBeTruthy();
  }));
});

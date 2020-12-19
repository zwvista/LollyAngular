import { inject, TestBed } from '@angular/core/testing';

import { UnitPhraseService } from './unit-phrase.service';

describe('UnitPhraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitPhraseService]
    });
  });

  it('should be created', inject([UnitPhraseService], (service: UnitPhraseService) => {
    expect(service).toBeTruthy();
  }));
});

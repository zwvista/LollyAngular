import { inject, TestBed } from '@angular/core/testing';

import { PhrasesUnitService } from './phrases-unit.service';

describe('PhrasesUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhrasesUnitService]
    });
  });

  it('should be created', inject([PhrasesUnitService], (service: PhrasesUnitService) => {
    expect(service).toBeTruthy();
  }));
});

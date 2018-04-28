import { TestBed, inject } from '@angular/core/testing';

import { UnitWordService } from './unit-word.service';

describe('UnitWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitWordService]
    });
  });

  it('should be created', inject([UnitWordService], (service: UnitWordService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UsMappingService } from './us-mapping.service';

describe('UsMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsMappingService = TestBed.get(UsMappingService);
    expect(service).toBeTruthy();
  });
});

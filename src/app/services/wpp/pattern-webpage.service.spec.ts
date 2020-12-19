import { TestBed } from '@angular/core/testing';

import { PatternWebpageService } from './pattern-webpage.service';

describe('PatternWebpageService', () => {
  let service: PatternWebpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternWebpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

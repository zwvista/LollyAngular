import { TestBed } from '@angular/core/testing';

import { AutoCorrectService } from './autocorrect.service';

describe('AutoCorrectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoCorrectService = TestBed.get(AutoCorrectService);
    expect(service).toBeTruthy();
  });
});

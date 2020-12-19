import { TestBed } from '@angular/core/testing';

import { LangWordService } from './lang-word.service';

describe('LangWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LangWordService = TestBed.get(LangWordService);
    expect(service).toBeTruthy();
  });
});

import { inject, TestBed } from '@angular/core/testing';

import { DictReferenceService, DictNoteService } from './dictionary.service';

describe('DictReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictReferenceService]
    });
  });

  it('should be created', inject([DictReferenceService], (service: DictReferenceService) => {
    expect(service).toBeTruthy();
  }));
});

describe('DictNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictNoteService]
    });
  });

  it('should be created', inject([DictNoteService], (service: DictNoteService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { DictWordService, DictNoteService } from './dictionary.service';

describe('DictWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictWordService]
    });
  });

  it('should be created', inject([DictWordService], (service: DictWordService) => {
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

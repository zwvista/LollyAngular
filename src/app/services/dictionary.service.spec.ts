import { TestBed, inject } from '@angular/core/testing';

import { DictMeanService, DictNoteService } from './dictionary.service';

describe('DictMeanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictMeanService]
    });
  });

  it('should be created', inject([DictMeanService], (service: DictMeanService) => {
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

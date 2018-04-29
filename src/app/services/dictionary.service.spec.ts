import { TestBed, inject } from '@angular/core/testing';

import { DictOnlineService, DictOfflineService, DictNoteService } from './dictionary.service';

describe('DictOnlineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictOnlineService]
    });
  });

  it('should be created', inject([DictOnlineService], (service: DictOnlineService) => {
    expect(service).toBeTruthy();
  }));
});

describe('DictOfflineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictOfflineService]
    });
  });

  it('should be created', inject([DictOfflineService], (service: DictOfflineService) => {
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

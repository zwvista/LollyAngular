import { inject, TestBed } from '@angular/core/testing';

import { TextbookService } from './textbook.service';

describe('TextbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextbookService]
    });
  });

  it('should be created', inject([TextbookService], (service: TextbookService) => {
    expect(service).toBeTruthy();
  }));
});

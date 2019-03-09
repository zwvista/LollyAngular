import { TestBed } from '@angular/core/testing';

import { VoicesService } from './voices.service';

describe('VoicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoicesService = TestBed.get(VoicesService);
    expect(service).toBeTruthy();
  });
});

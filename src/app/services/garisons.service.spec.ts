import { TestBed } from '@angular/core/testing';

import { GarisonsService } from './garisons.service';

describe('GarisonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarisonsService = TestBed.get(GarisonsService);
    expect(service).toBeTruthy();
  });
});

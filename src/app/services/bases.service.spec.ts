import { TestBed } from '@angular/core/testing';

import { BasesService } from './bases.service';

describe('BasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasesService = TestBed.get(BasesService);
    expect(service).toBeTruthy();
  });
});

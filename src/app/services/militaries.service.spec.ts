import { TestBed } from '@angular/core/testing';

import { MilitariesService } from './militaries.service';

describe('MilitariesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilitariesService = TestBed.get(MilitariesService);
    expect(service).toBeTruthy();
  });
});

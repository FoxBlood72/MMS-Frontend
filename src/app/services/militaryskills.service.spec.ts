import { TestBed } from '@angular/core/testing';

import { MilitaryskillsService } from './militaryskills.service';

describe('MilitaryskillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilitaryskillsService = TestBed.get(MilitaryskillsService);
    expect(service).toBeTruthy();
  });
});

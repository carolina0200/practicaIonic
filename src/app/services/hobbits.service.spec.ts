import { TestBed } from '@angular/core/testing';

import { HobbitsService } from './hobbits.service';

describe('HobbitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HobbitsService = TestBed.get(HobbitsService);
    expect(service).toBeTruthy();
  });
});

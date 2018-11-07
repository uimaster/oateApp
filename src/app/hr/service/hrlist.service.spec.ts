import { TestBed, inject } from '@angular/core/testing';

import { HrlistService } from './hrlist.service';

describe('HrlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrlistService]
    });
  });

  it('should be created', inject([HrlistService], (service: HrlistService) => {
    expect(service).toBeTruthy();
  }));
});

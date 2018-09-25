import { TestBed, inject } from '@angular/core/testing';

import { HrdetailsService } from './hrdetails.service';

describe('HrdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrdetailsService]
    });
  });

  it('should be created', inject([HrdetailsService], (service: HrdetailsService) => {
    expect(service).toBeTruthy();
  }));
});

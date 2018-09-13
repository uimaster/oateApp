import { TestBed, inject } from '@angular/core/testing';

import { EmployerjobService } from './employerjob.service';

describe('EmployerjobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployerjobService]
    });
  });

  it('should be created', inject([EmployerjobService], (service: EmployerjobService) => {
    expect(service).toBeTruthy();
  }));
});

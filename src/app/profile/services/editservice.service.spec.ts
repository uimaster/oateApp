import { TestBed, inject } from '@angular/core/testing';

import { EditserviceService } from './editservice.service';

describe('EditserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditserviceService]
    });
  });

  it('should be created', inject([EditserviceService], (service: EditserviceService) => {
    expect(service).toBeTruthy();
  }));
});

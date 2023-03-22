import { TestBed } from '@angular/core/testing';

import { CustomerShowService } from './customer-show.service';

describe('CustomerShowService', () => {
  let service: CustomerShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

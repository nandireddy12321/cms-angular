import { TestBed } from '@angular/core/testing';

import { VendorshowService } from './vendorshow.service';

describe('VendorshowService', () => {
  let service: VendorshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

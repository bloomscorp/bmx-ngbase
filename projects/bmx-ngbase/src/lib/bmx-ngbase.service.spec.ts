import { TestBed } from '@angular/core/testing';

import { BmxNgbaseService } from './bmx-ngbase.service';

describe('BmxNgbaseService', () => {
  let service: BmxNgbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmxNgbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

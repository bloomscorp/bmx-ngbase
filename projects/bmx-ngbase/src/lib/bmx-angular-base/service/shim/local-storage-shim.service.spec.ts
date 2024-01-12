import { TestBed } from '@angular/core/testing';

import { LocalStorageShimService } from './local-storage-shim.service';

describe('LocalStorageShimService', () => {
  let service: LocalStorageShimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageShimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

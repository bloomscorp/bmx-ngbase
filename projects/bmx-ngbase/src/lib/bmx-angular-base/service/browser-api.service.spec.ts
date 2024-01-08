import { TestBed } from '@angular/core/testing';

import { BrowserAPIService } from './browser-api.service';

describe('BrowserAPIService', () => {
  let service: BrowserAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

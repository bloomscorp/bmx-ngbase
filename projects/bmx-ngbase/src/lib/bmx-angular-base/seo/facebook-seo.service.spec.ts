import { TestBed } from '@angular/core/testing';

import { FacebookSeoService } from './facebook-seo.service';

describe('FacebookSeoService', () => {
  let service: FacebookSeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookSeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

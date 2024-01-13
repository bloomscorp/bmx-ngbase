import { TestBed } from '@angular/core/testing';

import { TwitterSeoService } from './twitter-seo.service';

describe('TwitterSeoService', () => {
  let service: TwitterSeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterSeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

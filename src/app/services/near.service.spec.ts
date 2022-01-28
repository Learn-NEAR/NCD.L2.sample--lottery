import { TestBed } from '@angular/core/testing';

import { NearService } from './near.service';

describe('NearService', () => {
  let service: NearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

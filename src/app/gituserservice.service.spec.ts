import { TestBed } from '@angular/core/testing';

import { GituserserviceService } from './gituserservice.service';

describe('GituserserviceService', () => {
  let service: GituserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

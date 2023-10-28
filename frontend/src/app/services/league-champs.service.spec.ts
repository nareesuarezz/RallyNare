import { TestBed } from '@angular/core/testing';

import { LeagueChampsService } from './league-champs.service';

describe('LeagueChampsService', () => {
  let service: LeagueChampsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueChampsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

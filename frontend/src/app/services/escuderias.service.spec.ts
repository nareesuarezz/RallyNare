import { TestBed } from '@angular/core/testing';

import { EscuderiasService } from './escuderias.service';

describe('EscuderiasService', () => {
  let service: EscuderiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscuderiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

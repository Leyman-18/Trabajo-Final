import { TestBed } from '@angular/core/testing';

import { ViajerosService } from './viajeros.service';

describe('ViajerosService', () => {
  let service: ViajerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReferenciaService } from './referencias.service';

describe('ReferenciasService', () => {
  let service: ReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

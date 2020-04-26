import { TestBed } from '@angular/core/testing';

import { DinamycServiceService } from './dinamyc-service.service';

describe('DinamycServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinamycServiceService = TestBed.get(DinamycServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TaxCalcService } from './tax-calc.service';

describe('TaxCalcService', () => {
  let service: TaxCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

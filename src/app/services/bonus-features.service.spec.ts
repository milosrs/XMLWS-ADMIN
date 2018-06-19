import { TestBed, inject } from '@angular/core/testing';

import { BonusFeaturesService } from './bonus-features.service';

describe('BonusFeaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BonusFeaturesService]
    });
  });

  it('should be created', inject([BonusFeaturesService], (service: BonusFeaturesService) => {
    expect(service).toBeTruthy();
  }));
});

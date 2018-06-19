import { TestBed, inject } from '@angular/core/testing';

import { AccomodationTypeService } from './accomodation-type.service';

describe('AccomodationTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccomodationTypeService]
    });
  });

  it('should be created', inject([AccomodationTypeService], (service: AccomodationTypeService) => {
    expect(service).toBeTruthy();
  }));
});

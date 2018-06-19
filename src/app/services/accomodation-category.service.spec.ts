import { TestBed, inject } from '@angular/core/testing';

import { AccomodationCategoryService } from './accomodation-category.service';

describe('AccomodationCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccomodationCategoryService]
    });
  });

  it('should be created', inject([AccomodationCategoryService], (service: AccomodationCategoryService) => {
    expect(service).toBeTruthy();
  }));
});

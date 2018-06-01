import { TestBed, inject } from '@angular/core/testing';

import { UserManipulatorService } from './user-manipulator.service';

describe('UserManipulatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManipulatorService]
    });
  });

  it('should be created', inject([UserManipulatorService], (service: UserManipulatorService) => {
    expect(service).toBeTruthy();
  }));
});

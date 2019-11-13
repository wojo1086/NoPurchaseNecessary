import { TestBed } from '@angular/core/testing';

import { IsLoggedInResolverService } from './is-logged-in-resolver.service';

describe('IsLoggedInResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsLoggedInResolverService = TestBed.get(IsLoggedInResolverService);
    expect(service).toBeTruthy();
  });
});

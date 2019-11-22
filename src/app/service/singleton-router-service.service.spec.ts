import { TestBed } from '@angular/core/testing';

import { SingletonRouterServiceService } from './singleton-router-service.service';

describe('SingletonRouterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingletonRouterServiceService = TestBed.get(SingletonRouterServiceService);
    expect(service).toBeTruthy();
  });
});

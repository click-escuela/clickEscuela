import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { RouteGuard } from './route.guard';

describe('RouteGuard', () => {
  let guard: RouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
   
      imports:[RouterTestingModule]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

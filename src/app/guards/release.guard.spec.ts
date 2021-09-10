import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { ReleaseGuard } from './release.guard';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ReleaseGuard', () => {
  let guard: ReleaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReleaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

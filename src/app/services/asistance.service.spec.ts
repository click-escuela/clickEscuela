/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AsistanceService } from './asistance.service';

describe('Service: Asistance', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistanceService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([AsistanceService], (service: AsistanceService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AsistanceParentService } from './asistance-parent.service';

describe('Service: AsistanceParent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsistanceParentService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([AsistanceParentService], (service: AsistanceParentService) => {
    expect(service).toBeTruthy();
  }));
});

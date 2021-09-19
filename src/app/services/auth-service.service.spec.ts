import { MaterialModule } from './../test-mocks/material.module';
/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { Session } from '../models/session';
import { AuthService } from './auth.service';

describe('Service: AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers: [AuthService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    
    expect(service).toBeTruthy();
  }));
});

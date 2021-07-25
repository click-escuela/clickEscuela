/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { HomeworkService } from './homework.service';

describe('Service: Homework', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeworkService],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should ...', inject([HomeworkService], (service: HomeworkService) => {
    expect(service).toBeTruthy();
  }));
});

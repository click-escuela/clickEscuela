import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GradesService } from './grades.service';

describe('Service: Grades', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [GradesService]
    });
  });

  it('should ...', inject([GradesService], (service: GradesService) => {
    expect(service).toBeTruthy();
  }));
});

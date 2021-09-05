import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseService } from './course.service';

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [CourseService]
    });
  });

  it('should ...', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});

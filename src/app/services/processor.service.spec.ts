/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProcessorService } from './processor.service';

describe('Service: Processor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessorService]
    });
  });

  it('should ...', inject([ProcessorService], (service: ProcessorService) => {
    expect(service).toBeTruthy();
  }));
});

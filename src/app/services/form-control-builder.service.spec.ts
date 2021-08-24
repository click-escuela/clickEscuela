/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormControlBuilderService } from './form-control-builder.service';

describe('Service: FormControlBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormControlBuilderService]
    });
  });

  it('should ...', inject([FormControlBuilderService], (service: FormControlBuilderService) => {
    expect(service).toBeTruthy();
  }));
});

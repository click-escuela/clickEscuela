import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormControlBuilderService {

constructor(private formBuilder: FormBuilder) {

 }

 build(formFormat: Map<string, Validators[]>): FormGroup {
    const formGroup = this.formBuilder.group(
      formFormat
    );
    
    return formGroup;

 }

}

import { FormBuilder, FormControl, Validators } from '@angular/forms';

export const FORM =
{
    GRADES_CONTROL: new FormBuilder().group({
        name : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
        course : new FormControl('', [Validators.required ]),
        subject : new FormControl('', [Validators.required  ]),
        type : new FormControl('', [Validators.required ]),
        number: new FormControl('', [Validators.pattern(/[1-9]{1} || [1-9]{1},[1,9]{1}/), Validators.max(10), Validators.min(1)]),
        student: new FormControl('', [Validators.required])
      })
};
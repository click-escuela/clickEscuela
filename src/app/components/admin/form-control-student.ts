import { FormBuilder, FormControl, Validators } from '@angular/forms';

const fb: FormBuilder = new FormBuilder();

export const STUDENT_CONTROL = fb.group(
{
        name: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        document: new FormControl('', [Validators.required]),
        birthday: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        level: new FormControl('', [Validators.required]),
        schoolId: new FormControl('', [Validators.required]),
        division: new FormControl('', [Validators.required]),
        grade: new FormControl('', [Validators.required]),
        cellPhone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        school: new FormControl('', [Validators.required]),
        adress: new FormControl('', [Validators.required]),
        parent: new FormControl('', [Validators.required])

    }
);

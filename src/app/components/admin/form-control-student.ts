import { FormBuilder, FormControl, Validators } from '@angular/forms';

const fb: FormBuilder = new FormBuilder();

export const STUDENT_CONTROL = fb.group(
{
        name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        surname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}'), Validators.maxLength(13)]),
        birthday: new FormControl('', [Validators.required]),
        gender: new FormControl('MALE', []),
        level: new FormControl('', [Validators.required]),
        schoolId: new FormControl('', []),
        division: new FormControl('', [Validators.required]),
        grade: new FormControl('', [Validators.required]),
        cellPhone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}')]),
        email: new FormControl(''
        , [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        school: new FormControl('Raggio', []),
        adress: new FormControl('', [Validators.required]),
        // province: new FormControl('', [Validators.required]),
        // locality: new FormControl('', [Validators.required]),
        parent: fb.group({
            name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            surname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            gender: new FormControl('MALE', []),
            document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}'), Validators.maxLength(13)]),
            birthday: new FormControl('', [Validators.required]),
            adress: new FormControl('', [Validators.required]),
            // province: new FormControl('', [Validators.required]),
            // locality: new FormControl('', [Validators.required]),
            cellPhone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}')]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        })

    }
);

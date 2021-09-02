import { FormBuilder, FormControl, Validators } from '@angular/forms';

const fb: FormBuilder = new FormBuilder();

export const STUDENT_CONTROL = fb.group(
{
        name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        surname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}'), Validators.maxLength(13)]),
        birthday: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        level: new FormControl('', []),
        schoolId: new FormControl('', []),
        division: new FormControl('', []),
        grade: new FormControl('', [Validators.required]),
        cellPhone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        school: new FormControl('', [Validators.required]),
        adress: new FormControl('', [Validators.required]),
        province: new FormControl('', [Validators.required]),
        locality: new FormControl('', [Validators.required]),
        parent: fb.group({
            name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            surname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
            gender: new FormControl('', [Validators.required]),
            document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}'), Validators.maxLength(13)]),
            birthday: new FormControl('', [Validators.required]),
            adress: new FormControl('', [Validators.required]),
            province: new FormControl('', [Validators.required]),
            locality: new FormControl('', [Validators.required]),
            cellPhone: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        })

    }
);

import { FormBuilder, FormControl, Validators } from '@angular/forms';

const fb: FormBuilder = new FormBuilder();

export const FORM = {
    GRADES_CONTROL: fb.group({
        description: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]),
        course: new FormControl('', [Validators.required]),
        subject: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.pattern(/[1-9]{1} || [1-9]{1},[1,9]{1}/), Validators.max(10), Validators.min(1)]),
        student: new FormControl('', [Validators.required])
    })
    ,
    STUDENT_CONTROL: fb.group(
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
    ),

    LOGIN_CONTROL: fb.group( {
        user: new FormControl('admin', [Validators.required]),
        password: new FormControl('password1', [Validators.required])
    }),
    TEACHER_CONTROL: fb.group({
        name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        surname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
        type: new FormControl('', Validators.required),
        adress: fb.group( {
            locality: new FormControl('', [Validators.required]) ,
            number: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
            street: new FormControl('', [Validators.required])
          }),
          birthday: new FormControl('', [Validators.required]),
          cellPhone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,30}')]),
          document: new FormControl('', [Validators.required, Validators.pattern('[0-9]{6,13}'), Validators.maxLength(13)]),
          documentType: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
          gender: new FormControl('', [Validators.required]),
          id: new FormControl(''),
          genderType: new FormControl(''),
          schoolId: new FormControl('')

    })
};

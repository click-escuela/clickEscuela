import { Course } from './../models/course';
export const COURSES = {

    DIVISION : ['A', 'B', 'C', 'D'],
    GRADE : generate(),
    LEVEL : ['PREESCOLAR', 'PRIMARIO', 'SECUNDARIO'],

};

export const GENDER = [
  {value: 'MALE', viewValue: 'Masculino'},
  {value: 'FEMALE', viewValue: 'Femenino'},
  {value: 'OTHER', viewValue: 'Otro'},

];


function generate() {
  const courses: string[] = [];
  for (let i = 1; i <= 9; i++) {
      courses.push(i + '');
  }

  return courses;
}

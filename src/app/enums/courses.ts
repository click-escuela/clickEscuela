import { Course } from './../models/course';
export const COURSES = {

    DIVISION : ['A', 'B', 'C', 'D'],
    GRADE : generate(),
    LEVEL : ['PRIMARIO', 'SECUNDARIO']

};


function generate() {
  const courses: number[] = [];
  for (let i = 1; i <= 9; i++) {
      courses.push(i);
  }

  return courses;
}

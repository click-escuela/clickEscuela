import { GradeI } from './grade';
export interface StudentGrade 
{
    id:string;
    name: string;
    surname: string;
    grades: GradeI[];
}

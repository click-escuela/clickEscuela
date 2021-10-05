import { AuthService } from './auth.service';
import { CourseGrade } from './../components/interfaces/course-grade';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GradeI } from './../components/interfaces/grade';
import { studentService } from './student.service';
import { Student } from './../models/student';
import { Injectable } from '@angular/core';
import { Grade } from '../models/grade';
import { environment } from 'src/environments/environment';
import { SCHOOL } from 'src/environments/school-data';



@Injectable({
  providedIn: 'root'
})
export class GradesService {
  authToken: any;



  constructor(private connector: HttpClient, private auth: AuthService) {
    this.authToken =  this.auth.getAuthToken();

  }

  getGrades(idSchool: string): Observable<GradeI[]> {
    const path = environment.GRADES_URL.replace('{schoolId}', idSchool);
    return this.connector.get<GradeI[]>(path, {headers: this.authToken});
  }

  getGradeByStudent(schoolId: string, studentId: string): Observable<GradeI[]> {

    const path = environment.STUDENT_URL.replace('{schoolId}', schoolId).replace('{studentId}', studentId);
    return this.connector.get<GradeI[]>(path, {headers: this.authToken});
  }

  getGradesByCourse(schoolId: string, teacherId: string): Observable<CourseGrade[]> {

    const path = environment.COURSES_URL.replace('{schoolId}', schoolId).replace('{teacherId}', teacherId);
    return this.connector.get<CourseGrade[]>(path, {headers: this.authToken});
  }

  addGrade(grade: GradeI): Observable<GradeI> {
    const path = environment.GRADES_URL.replace('{schoolId}', SCHOOL.ID);
    return this.connector.post<GradeI>(path, grade, {headers: this.authToken});
  }

}

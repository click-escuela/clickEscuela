import { TeacherCourse } from './../components/interfaces/teacher-course';
import { CourseI } from './../components/interfaces/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  authToken: any;
  constructor(private connector: HttpClient, private auth: AuthService) {
    this.authToken = auth.getAuthToken();
  }

  getAllCourses(idSchool): Observable<TeacherCourse> {
    const path = environment.COURSE_URL.replace('{schoolId}', idSchool);
    return this.connector.get<TeacherCourse>(path, {headers: this.authToken});
  }

  getCoursesByTeacher(schoolId: string, teacherId: string) {
    const path = environment.COURSES_URL.replace('{schoolId}', schoolId)
      .replace('{teacherId}', teacherId)
      .replace('List', '');
    return this.connector.get<any>(path, {headers: this.authToken});
  }
}

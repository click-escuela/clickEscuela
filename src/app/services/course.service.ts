import { TeacherCourse } from './../components/interfaces/teacher-course';
import { CourseI } from './../components/interfaces/course';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

constructor(private connector: HttpClient) { }


getAllCourses(idSchool): Observable<TeacherCourse> {
  const path = environment.COURSE_URL.replace('{schoolId}', idSchool);
  return this.connector.get<TeacherCourse>(path);

}

getCoursesByTeacher(schoolId: string, teacherId: string) {
    const path = environment.COURSES_URL.replace('{schoolId}', schoolId).replace('{teacherId}', teacherId).replace('List', '');
    return this.connector.get<any>(path);
}

}

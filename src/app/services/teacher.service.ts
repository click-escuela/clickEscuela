import { AuthService } from './auth.service';
import { TeacherI } from './../components/interfaces/teacher';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../components/interfaces/auth-token';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {


  authToken: any;

  constructor(public connector: HttpClient, public authService: AuthService ) {
    this.authToken =  this.authService.getAuthToken();
  }

  getTeachers(idSchool): Observable<TeacherI> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', idSchool);
    return this.connector.get<any>(path, {headers: this.authToken});
  }

  modifyTeacher(teacher: TeacherI): Observable<any> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.put<any>(path, teacher, {headers: this.authToken});
  }

  addTeacher(teacher: TeacherI): Observable<any> {
    const path = environment.TEACHERS_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.post<any>(path, teacher, {headers: this.authToken});
  }

}

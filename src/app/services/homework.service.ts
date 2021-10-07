import { AuthService } from './auth.service';
import { HomeworkI } from './../components/interfaces/homework';
import { Homework } from './../models/homework';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddHomeworkComponent } from './../components/teacher/homework/add-homework/add-homework.component';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private homeworksList: Homework[];
  authToken: { Authorization: string; };

  constructor(public connector: HttpClient, private auth: AuthService ) {
    this.authToken =  this.auth.getAuthToken();
  }
  addHomework(homework: HomeworkI): Observable<any> {
    const path = environment.ACTIVITY_URL.replace('{schoolId}', environment.schoolId);
    return this.connector.post<HomeworkI>(path, homework, {headers: this.authToken});
  }
}

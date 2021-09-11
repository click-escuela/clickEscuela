import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Session } from './../models/session';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Token } from '../models/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

token: Token;
constructor(private connector: HttpClient) {

}


getToken(credential: Credential): Observable<any> {
  const path = environment.TOKEN_URL;
  return this.connector.post<any>( path, credential);
}

}

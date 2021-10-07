import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Session } from './../models/session';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Token } from '../models/token';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../components/interfaces/auth-token';

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

getAuthToken() {
  const token = JSON.parse(localStorage.getItem('token')) as AuthToken;
  const tokenParse = token.token;
  return {Authorization: `Bearer ${tokenParse}`}
}

}

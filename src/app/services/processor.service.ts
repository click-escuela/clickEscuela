import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessorService {

authToken: any;
schoolId: string;
constructor(private http: HttpClient, private authService: AuthService) {
  this.authToken = authService.getAuthToken();
  this.schoolId = authService.getSchoolId();
}


getDataProcessor() {
  const path =
  environment.EXCEL_URL
  .replace('{schoolId}', this.schoolId);
  return this.http.get<any>(path, {headers: this.authToken});
}

}

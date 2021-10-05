import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymentList: Payment[];
  constructor(private connector: HttpClient, private auth: AuthService) {
    this.paymentList = [];
    this.paymentList.push(new Payment(3200, new Date('12/04/2020'), true));
    this.paymentList.push(new Payment(2900, new Date('11/11/2020'), true));
    this.paymentList.push(new Payment(2900, new Date('10/08/2020'), false));

  }

  pay(id: string): Observable<any> {
    const path = environment.PAYMENT_URL
    .replace('{schoolId}', environment.schoolId)
    .replace('{billId}', id);

    const body = {
      status : 'PAID',
    };

    return this.connector.put(path, body, {headers: this.auth.getAuthToken()});
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})

export class UserRequestService {

  private baseUrl = 'http://localhost:8080/api';
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  // private options = new HttpRequestOptions({ headers: this.headers });
  private account: Account;

  constructor(private http: HttpClient) { }

  getUserRequests(condition: string): Observable<any> {
    console.log(`${this.baseUrl}/userRequests`);
    if ('pending' === condition){
      return this.http.get(`${this.baseUrl}/userRequests/pending`);
    } else if ('all' === condition) {
      return this.http.get(`${this.baseUrl}/userRequests`);
    }
  }

  updateUserRequest(userRequestJson: string): Observable<any> {
      return this.http.post(this.baseUrl + '/userRequest', userRequestJson);
  }


}

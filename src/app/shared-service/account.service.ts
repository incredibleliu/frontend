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
export class AccountService {

  private baseUrl = 'http://localhost:8080/api';
  // private headers = new Headers({ 'Content-Type': 'application/json' });
  // private options = new HttpRequestOptions({ headers: this.headers });
  private account: Account;

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    // console.log('111', this.http.get(this.baseUrl + '/accounts', this.options).map((response: Response) => response.json()));
    // return this.http.get(this.baseUrl + '/accounts', this.options)
    //   .map((response: Response) => <Account[]>response.json())
    //   .catch(this.errorHandler);
    console.log(`${this.baseUrl}/accounts`);
    return this.http.get(`${this.baseUrl}/accounts`);
  }

    submitForApproval(accountsJson: string): Observable<any> {
    // return this.http.post(this.baseUrl + '/accounts', JSON.stringify(accounts), this.options)
    //   .map((response: Response) => response.json())
    //   .catch(this.errorHandler);
        return this.http.post(this.baseUrl + '/accounts', accountsJson);
  }

  getAccount(id: number): Observable<any> {
    // return this.http.get(this.baseUrl + '/account' + id, this.options)
    //   .map((response: Response) => <Account>response.json())
    //   .catch(this.errorHandler);
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  deleteAccount(id: number) {
    // return this.http.delete(this.baseUrl + '/account/' + id, this.options)
    //   .map((response: Response) => response.json())
    //   .catch(this.errorHandler);
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  createAccount(account: Account): Observable<object> {
    // return this.http.post(this.baseUrl + '/account', JSON.stringify(account), this.options)
    //   .map((response: Response) => response.json())
    //   .catch(this.errorHandler);
    return this.http.post(`${this.baseUrl}`, account);
  }


  updateAccount(id: number, value: any): Observable<object> {
    // return this.http.put(this.baseUrl + '/account', JSON.stringify(account), this.options)
    //   .map((response: Response) => response.json())
    //   .catch(this.errorHandler);
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'SERVER ERROR');
  }


  setter(account: Account) {
    this.account = account;
  }

  getter() {
    return this.account;
  }



}


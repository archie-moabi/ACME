import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../_models/account';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseUrl + 'accounts');
  }
}

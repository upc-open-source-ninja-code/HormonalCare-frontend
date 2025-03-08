import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  signUp(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-up`, user);
  }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/authentication/sign-in`, { username, password });
  }
}

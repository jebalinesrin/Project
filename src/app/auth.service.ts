import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  private apiUrl = 'http://localhost:9992';
  httpClient: any;
  constructor(private http : HttpClient) {}
  SignUp(userData: any) {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  Login(data: any) {
    return this.httpClient.post(`${this.apiUrl}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }
}


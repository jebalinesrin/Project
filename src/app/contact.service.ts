import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:9992';
  constructor(private http:HttpClient) { }
  contact(ContactData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Contact`, ContactData);
  }
  
}

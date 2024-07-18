import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://localhost:9992';
  constructor(private http:HttpClient) { }
  FormationInfo(formationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/direct`, formationData);
  }

  FormationLangue(formationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Langue`, formationData);
  }
}
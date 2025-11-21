import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = "https://localhost:44344/api/Users";

  constructor(private http: HttpClient) {}

  register(data: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/register`, data, {
      responseType: 'text'
    });
  }
}
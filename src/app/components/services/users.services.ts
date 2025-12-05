import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL REAL DE RENDER
  private apiUrl = "https://saluddigital-back-1.onrender.com/api/Users";

  constructor(private http: HttpClient) {}

  // 1. Iniciar sesión
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // 2. Registrar usuario
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // 3. Obtener perfil
  getUserByEmail(email: string): Observable<any> {
    // Tu backend espera un objeto JSON con el email, no el string directo
    const body = { email: email };
    return this.http.post(`${this.apiUrl}/getUser`, body);
  }
}
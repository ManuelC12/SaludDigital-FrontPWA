import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Ajusta el puerto si es necesario (ej: 44344 o 7152)
  private apiUrl = "https://localhost:44344/api/Users";

  constructor(private http: HttpClient) {}

  // Registrar usuario
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Iniciar sesión
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Obtener datos del perfil (Enviamos email en el body del POST)
  getUserByEmail(email: string): Observable<any> {
    const body = { email: email };
    return this.http.post(`${this.apiUrl}/getUser`, body);
  }
}
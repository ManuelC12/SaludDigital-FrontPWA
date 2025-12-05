import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.services'; // Asegúrate que la ruta al servicio sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private usersService: UsersService, private router: Router) {}

  login() {
    this.errorMessage = '';

    // 1. Validación Previa (Frontend)
    if (!this.email.trim() || !this.password.trim()) {
      this.errorMessage = 'Por favor ingresa email y contraseña.';
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    // 2. Llamada al Backend
    this.usersService.login(loginData).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res); 

        // 3. Verificación de respuesta exitosa
        // Importante: Tu backend devuelve 200 OK incluso si falla, 
        // por eso miramos la propiedad 'status' dentro del JSON.
        if (res && res.status === 'ok') { 
          
          // Guardar sesión
          localStorage.setItem('userEmail', this.email);
          
          // Si el backend manda el token en 'content' o 'token'
          if(res.content) {
            localStorage.setItem('token', res.content);
          }

          // Redirección
          this.router.navigate(['/meditaciones']);
        } else {
          // Si el servidor dice "error"
          this.errorMessage = res.info || 'Credenciales incorrectas';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error de conexión con el servidor.';
      }
    });
  }
}
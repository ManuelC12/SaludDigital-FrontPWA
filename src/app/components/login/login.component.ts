import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.services';

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
    
    // Objeto que espera tu endpoint de Login
    const loginData = { 
      email: this.email, 
      password: this.password 
    };

    this.usersService.login(loginData).subscribe({
      next: (res: any) => {
        // Asumiendo que tu backend devuelve un status o token si es exitoso
        // Ajusta esta condición según tu respuesta real de C#
        if (res) {
          // 1. Guardar email para el perfil
          localStorage.setItem('userEmail', this.email);
          
          // 2. Guardar token si existe
          if(res.token) localStorage.setItem('token', res.token);

          // 3. Redirigir
          this.router.navigate(['/meditaciones']);
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    });
  }
}
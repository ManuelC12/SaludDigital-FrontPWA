import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = ''; // limpiar mensaje previo
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, ingresa tu correo y contraseña';
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (res: any) => {
        if (res.status === 'ok') {
          // Redirige a Home si login correcto
          this.router.navigate(['/home']);
        } else {
          // Usuario o contraseña incorrectos
          this.errorMessage = res.info;
        }
      },
      error: (err) => {
        this.errorMessage = 'Error al conectar con el servidor';
        console.error(err);
      }
    });
  }
}

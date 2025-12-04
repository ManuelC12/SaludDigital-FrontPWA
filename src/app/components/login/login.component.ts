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

// login.component.ts

login() {
  // ... validaciones previas ...
  if (!this.email || !this.password) {
    this.errorMessage = 'Por favor ingresa email y contraseña.';
    return;
  }

  const loginData = {
    email: this.email,
    password: this.password
  };

  this.usersService.login(loginData).subscribe({
    next: (res: any) => {
      console.log('Respuesta del servidor:', res); 

      // 🛑 CAMBIO CRÍTICO AQUÍ:
      // No basta con preguntar "if (res)". 
      // Hay que preguntar si el status que mandó C# es "ok".
      // Nota: Verifica en tu consola si viene como "status" (minúscula) o "Status" (mayúscula)
      
      if (res && res.status === 'ok') { 
        
        localStorage.setItem('userEmail', this.email);
        
        // En tu C#, el token lo guardas en 'Content'
        if(res.content) localStorage.setItem('token', res.content);

        this.router.navigate(['/meditaciones']);
      } else {
        // Si el servidor respondió, pero dijo "error" en el status
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
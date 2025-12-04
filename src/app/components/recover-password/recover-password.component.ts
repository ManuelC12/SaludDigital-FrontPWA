import { Component } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  
  email: string = '';
  loading: boolean = false;
  errorMessage: string = '';
  
  // Esta variable controla si mostramos el formulario o el mensaje de éxito
  emailSent: boolean = false;

  constructor(
    // private authService: AuthService // Aquí inyectarías tu servicio real
  ) {}

  sendRecoveryLink() {
    // 1. Validación básica del email
    if (!this.email || !this.email.includes('@') || !this.email.includes('.')) {
      this.errorMessage = 'Por favor, introduce un correo electrónico válido.';
      // Pequeño truco para quitar el mensaje de error después de 3 segundos
      setTimeout(() => this.errorMessage = '', 3000);
      return;
    }

    // 2. Iniciar estado de carga
    this.loading = true;
    this.errorMessage = '';

    console.log('Enviando enlace de recuperación a:', this.email);

    // --- SIMULACIÓN DE LLAMADA AL BACKEND ---
    // Aquí reemplazarías esto por: this.authService.recoverPassword(this.email).subscribe(...)
    setTimeout(() => {
      
      this.loading = false;
      
      // ÉXITO: Cambiamos el estado para mostrar el mensaje de confirmación
      this.emailSent = true;
      
      // SI HUBIERA ERROR (ejemplo de cómo manejarlo):
      // this.emailSent = false;
      // this.errorMessage = 'No encontramos ninguna cuenta con ese correo.';

    }, 2000); // Simulamos una espera de 2 segundos
  }

}
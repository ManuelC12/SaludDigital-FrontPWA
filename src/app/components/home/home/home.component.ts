// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importa el servicio Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  emocionSeleccionada: string | null = null;
  
  emociones = [
    { nombre: 'Feliz', icono: '😊' },
    { nombre: 'Triste', icono: '😢' },
    { nombre: 'Ancioso', icono: '😰' }, // Corregido de "Anciano" a "Ancioso"
    { nombre: 'Depresivo', icono: '😔' }
  ];

  // 2. Inyecta el Router en el constructor
  constructor(private router: Router) {}

  seleccionarEmocion(emocion: string) {
    this.emocionSeleccionada = emocion;
  }

  continuar() {
    // Ambas acciones (continuar o saltar) llevan a la misma pantalla de objetivos
    console.log('Navegando a objetivos...');
    this.router.navigate(['/objetivos']); // 3. Navega a la ruta /objetivos
  }

  saltar() {
    console.log('Saltando selección de emoción y navegando a objetivos...');
    this.router.navigate(['/objetivos']); // 3. Navega a la ruta /objetivos
  }
}
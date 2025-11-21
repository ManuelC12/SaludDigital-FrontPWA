// objetivos.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- Asegúrate de que Router esté importado

@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss']
})
export class ObjetivosComponent {
  objetivosSeleccionados: number[] = [];
  objetivos = [
    { id: 1, texto: 'Manejar la ansiedad' },
    { id: 2, texto: 'Reducir el estrés' },
    { id: 3, texto: 'Obtener motivación' },
    { id: 4, texto: 'Mejorar el estado de ánimo' },
    { id: 5, texto: 'Dormir mejor' },
    { id: 6, texto: 'Otro' }
  ];

  // Inyecta el Router
  constructor(private router: Router) {}

  toggleObjetivo(id: number) {
    const index = this.objetivosSeleccionados.indexOf(id);
    if (index === -1) {
      this.objetivosSeleccionados.push(id);
    } else {
      this.objetivosSeleccionados.splice(index, 1);
    }
  }

  get haySeleccion(): boolean {
    return this.objetivosSeleccionados.length > 0;
  }

  continuar() {
    if (this.haySeleccion) {
      console.log('Objetivos seleccionados:', this.objetivosSeleccionados);
      // Navega a la pantalla de meditaciones
      this.router.navigate(['/meditaciones']);
    }
  }

  saltar() {
    console.log('Omitir selección de objetivos');
    // También podrías llevar a la pantalla de meditaciones al saltar
    this.router.navigate(['/meditaciones']);
  }
}
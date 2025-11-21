// meditaciones.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-meditaciones',
  templateUrl: './meditaciones.component.html',
  styleUrls: ['./meditaciones.component.scss']
})
export class MeditacionesComponent {
  
  // Array con las meditaciones recomendadas
  meditacionesRecomendadas = [
    { id: 1, titulo: 'Ejercicio respiración Meditación', duracion: 3 },
    { id: 2, titulo: 'Ejercicio exploración corporal y meditación', duracion: 3 },
    { id: 3, titulo: 'Ejercicio meditación relajante', duracion: 3 }
  ];

  // Método que se ejecuta al hacer clic en el botón de reproducción
  reproducirMeditacion(id: number) {
    console.log(`Reproduciendo meditación con ID: ${id}`);
    // Aquí iría la lógica para iniciar la reproducción de audio o video
  }
}

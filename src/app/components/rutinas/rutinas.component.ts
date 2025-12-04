  import { Component } from '@angular/core';

  interface Paso {
    titulo: string;
    instruccion: string;
    icono: string;
    duracionSeg?: number; // Opcional
  }

  interface Rutina {
    id: number;
    titulo: string;
    descripcion: string;
    icono: string;
    duracionTotal: number; // en minutos
    pasos: Paso[];
  }

  @Component({
    selector: 'app-rutinas',
    templateUrl: './rutinas.component.html',
    styleUrls: ['./rutinas.component.scss']
  })
  export class RutinasComponent {

    rutinaActiva: Rutina | null = null;
    pasoActual: number = 0;
    progresoPorcentaje: number = 0;
    rutinaCompletada: boolean = false;

    // DATA: Rutinas predefinidas
    rutinas: Rutina[] = [
      {
        id: 1,
        titulo: 'Despertar Consciente',
        descripcion: 'Empieza el día con intención y sin prisas.',
        icono: '🌅',
        duracionTotal: 5,
        pasos: [
          { titulo: 'Hidratación', instruccion: 'Bebe un vaso grande de agua antes de mirar el celular.', icono: '💧', duracionSeg: 30 },
          { titulo: 'Estiramiento', instruccion: 'Estira los brazos hacia el techo y respira profundo 3 veces.', icono: '🙆', duracionSeg: 60 },
          { titulo: 'Intención', instruccion: 'Piensa: ¿Cómo quiero sentirme hoy? (Ej: Tranquilo, Enfocado).', icono: '💭', duracionSeg: 60 },
          { titulo: 'Luz Natural', instruccion: 'Abre las cortinas o sal un momento a recibir luz.', icono: '☀️', duracionSeg: 60 }
        ]
      },
      {
        id: 2,
        titulo: 'SOS: Calma Inmediata',
        descripcion: 'Baja las revoluciones en momentos de estrés alto.',
        icono: '🛑',
        duracionTotal: 3,
        pasos: [
          { titulo: 'Detente', instruccion: 'Suelta lo que estés haciendo. Pon los pies firmes en el suelo.', icono: '🦶', duracionSeg: 10 },
          { titulo: 'Respiración Cuadrada', instruccion: 'Inhala 4s, Retén 4s, Exhala 4s, Espera 4s. Repite.', icono: '🌬️', duracionSeg: 120 },
          { titulo: 'Grounding', instruccion: 'Nombra 3 cosas que ves, 2 que escuchas y 1 que sientes.', icono: '👀', duracionSeg: 60 }
        ]
      },
      {
        id: 3,
        titulo: 'Desconexión Nocturna',
        descripcion: 'Prepara tu mente y cuerpo para dormir mejor.',
        icono: '🌙',
        duracionTotal: 10,
        pasos: [
          { titulo: 'Modo Avión', instruccion: 'Aleja las pantallas. Pon el celular en silencio o lejos de la cama.', icono: '📵', duracionSeg: 30 },
          { titulo: 'Higiene', instruccion: 'Lávate la cara con agua tibia sintiendo la temperatura.', icono: '🧖', duracionSeg: 120 },
          { titulo: 'Gratitud', instruccion: 'Recuerda un momento agradable del día de hoy.', icono: '🙏', duracionSeg: 60 },
          { titulo: 'Relajación', instruccion: 'Acuéstate y relaja la mandíbula y los hombros.', icono: '🛌', duracionSeg: 60 }
        ]
      }
    ];

    iniciarRutina(rutina: Rutina) {
      this.rutinaActiva = rutina;
      this.pasoActual = 0;
      this.actualizarProgreso();
    }

    siguientePaso() {
      if (this.rutinaActiva && this.pasoActual < this.rutinaActiva.pasos.length - 1) {
        this.pasoActual++;
        this.actualizarProgreso();
      } else {
        this.rutinaCompletada = true;
        this.rutinaActiva = null;
      }
    }

    pasoAnterior() {
      if (this.pasoActual > 0) {
        this.pasoActual--;
        this.actualizarProgreso();
      }
    }

    cerrarRutina() {
      if(confirm('¿Quieres salir de la rutina?')) {
        this.rutinaActiva = null;
        this.pasoActual = 0;
      }
    }

    finalizarTodo() {
      this.rutinaCompletada = false;
      this.pasoActual = 0;
    }

    actualizarProgreso() {
      if (this.rutinaActiva) {
        // Calculamos porcentaje (pasoActual + 1 para que el primer paso no sea 0%)
        this.progresoPorcentaje = ((this.pasoActual + 1) / this.rutinaActiva.pasos.length) * 100;
      }
    }
  }
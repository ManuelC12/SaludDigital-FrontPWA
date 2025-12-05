import { Component } from '@angular/core';

interface Paso {
  titulo: string;
  instruccion: string;
  icono: string;
  duracionSeg?: number;
}

interface Rutina {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  duracionTotal: number; // minutos
  emocionesTarget: string[]; // Qué emociones atiende esta rutina
  pasos: Paso[];
}

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss']
})
export class RutinasComponent {

  emocionSeleccionada: string | null = null;
  rutinasVisibles: Rutina[] = [];
  
  // Variables del Reproductor
  rutinaActiva: Rutina | null = null;
  pasoActual: number = 0;
  progresoPorcentaje: number = 0;
  rutinaCompletada: boolean = false;

  // --- CATÁLOGO DE RUTINAS (6 OPCIONES DIFERENTES) ---
  rutinas: Rutina[] = [
    {
      id: 1,
      titulo: 'Mañana Zen ☀️',
      descripcion: 'Empieza el día con claridad y sin el celular.',
      icono: '🌅',
      duracionTotal: 5,
      emocionesTarget: ['cansancio', 'tristeza'], 
      pasos: [
        { titulo: 'Hidratación', instruccion: 'Bebe un vaso grande de agua para despertar tu cerebro.', icono: '💧', duracionSeg: 30 },
        { titulo: 'Estiramiento', instruccion: 'Estira los brazos hacia el techo y toca tus pies suavemente.', icono: '🙆', duracionSeg: 60 },
        { titulo: 'Luz Natural', instruccion: 'Abre la ventana y deja que el sol toque tu cara.', icono: '☀️', duracionSeg: 60 },
        { titulo: 'Intención', instruccion: 'Di en voz alta: "Hoy elijo estar en paz".', icono: '🗣️', duracionSeg: 30 }
      ]
    },
    {
      id: 2,
      titulo: 'SOS: Calma el Pánico 🚨',
      descripcion: 'Intervención rápida para crisis de ansiedad.',
      icono: '🛑',
      duracionTotal: 3,
      emocionesTarget: ['ansiedad', 'estres'],
      pasos: [
        { titulo: 'Alto Total', instruccion: 'Deja lo que estés haciendo. Siéntate y pon los pies firmes en el suelo.', icono: '🦶', duracionSeg: 15 },
        { titulo: 'Respiración 4-7-8', instruccion: 'Inhala en 4s, Retén el aire 7s, Exhala en 8s. (Repetiremos 3 veces).', icono: '🌬️', duracionSeg: 60 },
        { titulo: 'Hielo o Agua', instruccion: 'Mójate la cara con agua fría o sostén un hielo. Esto resetea tu sistema nervioso.', icono: '🧊', duracionSeg: 45 },
        { titulo: 'Grounding 5-4-3-2-1', instruccion: 'Nombra 5 cosas que ves y 4 que puedes tocar ahora mismo.', icono: '👀', duracionSeg: 60 }
      ]
    },
    {
      id: 3,
      titulo: 'Dulces Sueños 🌙',
      descripcion: 'Desconecta tu mente para dormir profundo.',
      icono: '🛌',
      duracionTotal: 10,
      emocionesTarget: ['cansancio', 'estres'],
      pasos: [
        { titulo: 'Adiós Pantallas', instruccion: 'Pon el celular en modo "No Molestar" y aléjalo de la cama.', icono: '📵', duracionSeg: 30 },
        { titulo: 'Descarga Mental', instruccion: 'Si tienes pendientes, anótalos en un papel para sacarlos de tu cabeza.', icono: '📝', duracionSeg: 120 },
        { titulo: 'Gratitud', instruccion: 'Piensa en 3 cosas pequeñas que salieron bien hoy.', icono: '🙏', duracionSeg: 60 },
        { titulo: 'Escaneo Corporal', instruccion: 'Acuéstate y relaja: Dedos de los pies, piernas, estómago, hombros y mandíbula.', icono: '✨', duracionSeg: 180 }
      ]
    },
    {
      id: 4,
      titulo: 'Abrazo al Corazón ❤️',
      descripcion: 'Autocompasión para cuando te sientes bajo de ánimo.',
      icono: '🩹',
      duracionTotal: 6,
      emocionesTarget: ['tristeza', 'soledad'],
      pasos: [
        { titulo: 'Mano al Pecho', instruccion: 'Pon una mano sobre tu corazón y la otra en tu estómago. Siente tu calor.', icono: '👐', duracionSeg: 60 },
        { titulo: 'Validación', instruccion: 'Repite: "Es válido sentirme así. No tengo que estar bien todo el tiempo".', icono: '💭', duracionSeg: 60 },
        { titulo: 'Bebida Caliente', instruccion: 'Prepárate un té o café caliente. Siente el aroma y el calor de la taza.', icono: '☕', duracionSeg: 120 },
        { titulo: 'Mensaje Amable', instruccion: 'Envíale un mensaje a alguien que quieras, o escríbete una nota amable a ti mismo.', icono: '💌', duracionSeg: 60 }
      ]
    },
    {
      id: 5,
      titulo: 'Desbloqueo Mental 🧠',
      descripcion: 'Recupera el enfoque cuando te sientes abrumado.',
      icono: '⚡',
      duracionTotal: 4,
      emocionesTarget: ['estres', 'cansancio'],
      pasos: [
        { titulo: 'Ventilación', instruccion: 'Abre una ventana. El aire fresco oxigena el cerebro.', icono: '💨', duracionSeg: 30 },
        { titulo: 'Micro-Orden', instruccion: 'Ordena SOLO lo que está frente a ti en tu mesa/escritorio.', icono: '🧹', duracionSeg: 60 },
        { titulo: 'Una sola cosa', instruccion: 'Elige UNA sola tarea pequeña para hacer en los próximos 5 minutos.', icono: '1️⃣', duracionSeg: 60 },
        { titulo: 'Empezar', instruccion: 'Cuenta 5, 4, 3, 2, 1... ¡Y empieza!', icono: '🚀', duracionSeg: 10 }
      ]
    },
    {
      id: 6,
      titulo: 'Caminata Consciente 🚶',
      descripcion: 'Movimiento suave para salir de tu cabeza.',
      icono: '🌳',
      duracionTotal: 15,
      emocionesTarget: ['ansiedad', 'tristeza', 'estres'],
      pasos: [
        { titulo: 'Zapatos', instruccion: 'Ponte zapatos cómodos. Vamos a salir (o caminar por la casa).', icono: '👟', duracionSeg: 60 },
        { titulo: 'Sin Audífonos', instruccion: 'Intenta no usar música por unos minutos. Escucha el mundo.', icono: '👂', duracionSeg: 10 },
        { titulo: 'Ritmo', instruccion: 'Camina a un ritmo normal. Siente cómo tus pies tocan el suelo.', icono: '👣', duracionSeg: 300 },
        { titulo: 'Colores', instruccion: 'Busca 5 cosas de color verde y 5 de color azul mientras caminas.', icono: '🎨', duracionSeg: 180 }
      ]
    }
  ];

  // --- MÉTODOS DE FILTRADO ---

  seleccionarEmocion(emocion: string) {
    this.emocionSeleccionada = emocion;
    // Filtramos las rutinas que incluyan la emoción seleccionada en su lista de targets
    this.rutinasVisibles = this.rutinas.filter(r => r.emocionesTarget.includes(emocion));
  }

  obtenerNombreEmocion(cod: string): string {
    const nombres: any = { 
      estres: 'Estrés y Abrumación', 
      ansiedad: 'Ansiedad y Nervios', 
      cansancio: 'Cansancio Mental', 
      tristeza: 'Tristeza o Soledad' 
    };
    return nombres[cod] || cod;
  }

  // --- MÉTODOS DEL REPRODUCTOR (PLAYER) ---

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
    if(confirm('¿Quieres detener la rutina actual?')) {
      this.rutinaActiva = null;
      this.pasoActual = 0;
    }
  }

  finalizarTodo() {
    this.rutinaCompletada = false;
    this.pasoActual = 0;
    this.emocionSeleccionada = null; // Regresa al selector de emociones
  }

  actualizarProgreso() {
    if (this.rutinaActiva) {
      this.progresoPorcentaje = ((this.pasoActual + 1) / this.rutinaActiva.pasos.length) * 100;
    }
  }
}
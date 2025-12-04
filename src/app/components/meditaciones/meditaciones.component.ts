import { Component, OnInit, OnDestroy } from '@angular/core';

interface Meditacion {
  id: number;
  titulo: string;
  duracion: number;
  categoria: 'ansiedad' | 'dormir' | 'relax' | 'energia';
  color: string;
  esFavorito: boolean;
  archivo: string; // <--- NUEVO CAMPO: La ruta del mp3
  reproduciendo?: boolean; // <--- NUEVO: Para cambiar el icono
}

@Component({
  selector: 'app-meditaciones',
  templateUrl: './meditaciones.component.html',
  styleUrls: ['./meditaciones.component.scss']
})
export class MeditacionesComponent implements OnInit, OnDestroy {
  
  filtroActual: string = 'todos';
  modoSOS: boolean = false;
  
  // Variable para controlar el reproductor de audio
  audioPlayer: HTMLAudioElement | null = null;
  meditacionActualId: number | null = null;

  // Actualizamos los datos con las rutas de los archivos
  todasLasMeditaciones: Meditacion[] = [
    { 
      id: 1, 
      titulo: 'Respiración para la Ansiedad', 
      duracion: 5, 
      categoria: 'ansiedad', 
      color: '#FF8A80', 
      esFavorito: false,
      archivo: 'assets/audios/ansiedad.mp3' // Asegúrate de que el nombre coincida
    },
    { 
      id: 2, 
      titulo: 'Escaneo Corporal (Sueño)', 
      duracion: 15, 
      categoria: 'dormir', 
      color: '#9FA8DA', 
      esFavorito: true,
      archivo: 'assets/audios/sueno.mp3'
    },
    { 
      id: 3, 
      titulo: 'Energía Matutina', 
      duracion: 3, 
      categoria: 'energia', 
      color: '#FFE082', 
      esFavorito: false,
      archivo: 'assets/audios/energia.mp3'
    },
    { 
      id: 4, 
      titulo: 'Alivio de Estrés Rápido', 
      duracion: 3, 
      categoria: 'ansiedad', 
      color: '#FF8A80', 
      esFavorito: false,
      archivo: 'assets/audios/ansiedad.mp3' // Puedes repetir audios si quieres
    },
    { 
      id: 5, 
      titulo: 'Sonidos de la Naturaleza', 
      duracion: 20, 
      categoria: 'relax', 
      color: '#A5D6A7', 
      esFavorito: true,
      archivo: 'assets/audios/relax.mp3'
    }
  ];

  meditacionesVisibles: Meditacion[] = [];

  ngOnInit() {
    this.meditacionesVisibles = this.todasLasMeditaciones;
  }

  // Importante: Detener el audio si el usuario cambia de página
  ngOnDestroy() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
    }
  }

  reproducirMeditacion(meditacion: Meditacion) {
    // 1. Si ya hay un audio sonando...
    if (this.audioPlayer) {
      // Si clicamos el MISMO audio que está sonando, lo pausamos
      if (this.meditacionActualId === meditacion.id && !this.audioPlayer.paused) {
        this.audioPlayer.pause();
        meditacion.reproduciendo = false;
        return; // Salimos de la función
      }
      
      // Si clicamos OTRO audio, detenemos el anterior
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0; // Reiniciar
      
      // Reseteamos el estado visual de todos
      this.todasLasMeditaciones.forEach(m => m.reproduciendo = false);
    }

    // 2. Crear nueva instancia de audio
    this.audioPlayer = new Audio(meditacion.archivo);
    this.meditacionActualId = meditacion.id;
    
    // 3. Reproducir
    this.audioPlayer.play().catch(error => {
      console.error("Error al reproducir audio:", error);
      alert("No se pudo encontrar el archivo de audio. Verifica la carpeta assets.");
    });
    
    meditacion.reproduciendo = true;

    // 4. Detectar cuando termina el audio para cambiar el icono
    this.audioPlayer.onended = () => {
      meditacion.reproduciendo = false;
      this.meditacionActualId = null;
    };
  }

  filtrarPor(categoria: string) {
    this.filtroActual = categoria;
    if (categoria === 'todos') {
      this.meditacionesVisibles = this.todasLasMeditaciones;
    } else {
      this.meditacionesVisibles = this.todasLasMeditaciones.filter(m => m.categoria === categoria);
    }
  }

  toggleFavorito(meditacion: Meditacion) {
    meditacion.esFavorito = !meditacion.esFavorito;
  }

  toggleSOS() {
    this.modoSOS = !this.modoSOS;
  }
}
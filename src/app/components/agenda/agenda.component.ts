import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface JournalEntry {
  id: number;
  date: string;
  subject: string;
  reflection: string;
  gratitude: string;
  sleepHours: number;
  waterGlasses: number;
  mood: 'happy' | 'neutral' | 'sad';
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  entries: JournalEntry[] = [];
  fechaHoy: string = '';

  ngOnInit() {
    // 1. Establecer fecha actual al inicio
    this.setFechaActual();

    // 2. Cargar datos del dispositivo (PWA Offline support)
    const savedData = localStorage.getItem('my_journal_entries');
    if (savedData) {
      this.entries = JSON.parse(savedData);
    }
  }

  saveEntry(form: NgForm) {
    if (form.valid) {
      const newEntry: JournalEntry = {
        id: Date.now(),
        date: form.value.dateEntry, // Usa el valor del input
        subject: form.value.subject,
        reflection: form.value.reflection,
        gratitude: form.value.gratitude,
        sleepHours: form.value.sleepHours,
        waterGlasses: form.value.waterGlasses,
        mood: form.value.mood
      };

      // Agregamos al principio del array
      this.entries.unshift(newEntry);
      
      // Guardamos en memoria del teléfono/PC
      this.actualizarLocalStorage();

      // Limpiamos el formulario
      form.resetForm();
      
      // IMPORTANTE: Restauramos la fecha de hoy y valores por defecto
      // para que el usuario no tenga que seleccionarla de nuevo
      this.setFechaActual();
      
      alert('¡Registro guardado exitosamente!');
    }
  }

  deleteEntry(id: number) {
    if(confirm('¿Estás seguro de borrar esta nota?')) {
      this.entries = this.entries.filter(entry => entry.id !== id);
      this.actualizarLocalStorage();
    }
  }

  // Funciones auxiliares para mantener el código limpio
  private actualizarLocalStorage() {
    localStorage.setItem('my_journal_entries', JSON.stringify(this.entries));
  }

  private setFechaActual() {
    this.fechaHoy = new Date().toISOString().split('T')[0];
  }
}
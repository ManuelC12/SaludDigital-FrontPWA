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
  mood: string;
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
    this.setFechaActual();
    const savedData = localStorage.getItem('my_journal_entries');
    if (savedData) {
      this.entries = JSON.parse(savedData);
    }
  }

  saveEntry(form: NgForm) {
    if (form.valid) {
      const newEntry: JournalEntry = {
        id: Date.now(),
        date: form.value.dateEntry,
        subject: form.value.subject,
        reflection: form.value.reflection,
        gratitude: form.value.gratitude,
        sleepHours: form.value.sleepHours,
        waterGlasses: form.value.waterGlasses,
        mood: form.value.mood
      };

      this.entries.unshift(newEntry);
      this.actualizarLocalStorage();
      form.resetForm();
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

  // Traductor de códigos de emoción (SOLO NEUTRAS/DIFÍCILES)
  getMoodEmoji(mood: string): string {
    const map: any = {
      neutral: '😐',
      tired: '😫',
      anxious: '😰',
      sad: '😔',
      lonely: '🥺',
      angry: '😠',
      apathetic: '😞',
      overwhelmed: '😵'
    };
    return map[mood] || '❓';
  }

  private actualizarLocalStorage() {
    localStorage.setItem('my_journal_entries', JSON.stringify(this.entries));
  }

  private setFechaActual() {
    this.fechaHoy = new Date().toISOString().split('T')[0];
  }
}
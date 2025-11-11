import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  phrases = [
  { text: "No tienes que controlar tus pensamientos; solo deja de permitirles que te controlen.", author: "Dan Millman" },
  { text: "Date permiso de ser un trabajo en progreso.", author: "Anónimo" },
  { text: "A veces descansar no es rendirse, es empezar de nuevo con más claridad.", author: "Frase original" },
  { text: "Sé amable contigo mismo. Estás haciendo lo mejor que puedes.", author: "Anónimo" },
  { text: "Tu valor no disminuye por las veces que te caíste, sino por las veces que decidiste no levantarte.", author: "Frase original" },
  { text: "Nada puede traerte paz sino tú mismo.", author: "Ralph Waldo Emerson" },
  { text: "Entre el estímulo y la respuesta hay un espacio. En ese espacio reside nuestra libertad.", author: "Viktor Frankl" },
  { text: "La mente tranquila trae fuerza interior y confianza en uno mismo.", author: "Dalai Lama" },
  { text: "No se trata de escapar del caos, sino de encontrar serenidad en medio de él.", author: "Frase original" },
  { text: "El bienestar no es un destino, es una práctica diaria.", author: "Frase original" },
  { text: "Conocerse a uno mismo es el comienzo de toda sabiduría.", author: "Aristóteles" },
  { text: "Lo que niegas te somete; lo que aceptas te transforma.", author: "Carl Jung" },
  { text: "A veces el paso más valiente que puedes dar es pedir ayuda.", author: "Frase original" },
  { text: "El crecimiento personal empieza cuando dejas de huir de ti mismo.", author: "Frase original" },
  { text: "Eres más que tus pensamientos, más que tus emociones, más que tus miedos.", author: "Frase original" },
  { text: "Incluso la noche más oscura terminará con la salida del sol.", author: "Victor Hugo" },
  { text: "La esperanza es el sueño del alma despierta.", author: "Aristóteles" },
  { text: "Tu historia no termina aquí, apenas estás aprendiendo a escribirla con más amor.", author: "Frase original" },
  { text: "Cada día es una nueva oportunidad para sanar.", author: "Frase original" },
  { text: "Respira. No estás solo. Todo está bien en este momento.", author: "Frase original" }
];



}

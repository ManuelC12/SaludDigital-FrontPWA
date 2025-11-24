export interface User {
  nombre: string;
  email: string;
  edad: number;
  genre: string; // Asegúrate de que el backend devuelva "genre" y no "genero"
  // Agrega más campos si tu backend los devuelve (ej: celular)
}

// Interfaz para la respuesta genérica del backend (MediatR)
export interface ApiResponse {
  status: number | string; // Depende de cómo sea tu clase Response en C#
  message?: string;
  data: User; // Aquí vendrá el objeto usuario
}
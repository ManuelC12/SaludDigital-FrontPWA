import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: any = {
    nombre: 'Usuario',
    email: '',
    edad: 0,
    genre: 'No especificado'
  };
  
  loading: boolean = true;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const emailLocal = localStorage.getItem('userEmail');

    if (emailLocal) {
      this.usersService.getUserByEmail(emailLocal).subscribe({
        next: (response: any) => {
          // Ajusta esto según tu backend (si viene en 'content' o directo)
          const data = response.content || response;

          this.usuario = {
            nombre: data.name || 'Sin Nombre',
            email:  data.email || emailLocal,
            edad:   data.age || 0,
            genre:  data.gender || 'No especificado'
          };
          this.loading = false;
        },
        error: (err) => {
          console.error('Error cargando perfil:', err);
          this.loading = false;
        }
      });
    } else {
      // Si no hay email, al login
      this.router.navigate(['/login']);
    }
  }

  // Generar iniciales (Ej: Juan Perez -> JP)
  get iniciales(): string {
    const nombre = this.usuario.nombre || '';
    if (!nombre || nombre === 'Sin Nombre') return '?';
    
    const partes = nombre.split(' ');
    if (partes.length >= 2) {
      return (partes[0][0] + partes[1][0]).toUpperCase();
    }
    return nombre[0].toUpperCase();
  }

  cerrarSesion() {
    // Limpiamos todo el localStorage para seguridad
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}8
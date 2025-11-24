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
    nombre: '',
    email: '',
    edad: 0,
    genre: ''
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
          console.log('✅ Perfil cargado correctamente');

          // 1. EXTRAER DATOS: Tu backend los envía dentro de 'content'
          // Si por alguna razón 'content' no existe, usamos 'response' directo como respaldo.
          const data = response.content || response;

          // 2. MAPEO EXACTO (Basado en tu consola: name, email, age, gender)
          this.usuario = {
            nombre: data.name || 'Sin Nombre',
            email:  data.email || emailLocal,
            edad:   data.age || 0,
            genre:  data.gender || 'No especificado'
          };

          this.loading = false;
        },
        error: (err) => {
          console.error('❌ Error al cargar perfil:', err);
          this.loading = false;
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Generar iniciales (Ej: Mesi -> M)
  get iniciales(): string {
    const nombre = this.usuario.nombre || '';
    if (!nombre || nombre === 'Sin Nombre') return '?';
    
    const partes = nombre.split(' ');
    if (partes.length >= 2) {
      return (partes[0][0] + partes[1][0]).toUpperCase();
    }
    return nombre[0].toUpperCase();
  }

  irAlInicio() {
    this.router.navigate(['/home']); 
  }

  cerrarSesion() {
    localStorage.removeItem('userEmail');
    // Si usas token, bórralo también: localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
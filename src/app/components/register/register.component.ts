import { Component } from '@angular/core';
import { UsersService } from '../../components/services/users.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = {
    nombre: '',
    email: '',
    celular: '',
    password: '',
    edad: 0,
    genre: ''
  };

  constructor(private usersService: UsersService) {}

  registrar() {
    this.usersService.register(this.form).subscribe({
      next: (res: string) => {
        console.log('Respuesta del servidor:', res);
        alert('Usuario registrado correctamente');
      },
      error: (err: any) => {
        console.error('Error:', err);
        alert('Hubo un error al registrar al usuario.');
      }
    });
  }

}

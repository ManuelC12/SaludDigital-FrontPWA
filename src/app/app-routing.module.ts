import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { MeditacionesComponent } from './components/meditaciones/meditaciones.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: RecoverPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'objetivos', component: ObjetivosComponent }, 
  { path: 'meditaciones', component: MeditacionesComponent },
  { path: 'rutinas', component: RutinasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'agenda', component: AgendaComponent },
  // Redirección por defecto si la ruta no existe
  { path: '**', redirectTo: '' }             
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
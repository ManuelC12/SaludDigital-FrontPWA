import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Para la API
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Para Login y Agenda

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home/home.component'; // Asegúrate de esta ruta
import { NavbarComponent } from './components/navbar/navbar.component';
import { MeditacionesComponent } from './components/meditaciones/meditaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    MeditacionesComponent,
    PerfilComponent,
    AgendaComponent,
    RecoverPasswordComponent,
    RutinasComponent,
    ObjetivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Aquí se cargan las rutas
    HttpClientModule, // ¡Vital para conectar con Render!
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Registra el PWA inmediatamente cuando la app es estable (30s max)
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
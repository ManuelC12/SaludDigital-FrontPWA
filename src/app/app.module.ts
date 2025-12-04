import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
//import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { MainComponent } from './components/main/main.component';
import { MeditationComponent } from './pages/meditation/meditation.component';
import { BooksComponent } from './pages/books/books.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { MedComponent } from './pages/med/med.component';
import { FeelingsComponent } from './pages/feelings/feelings.component';
import { ObjectiveComponent } from './pages/objective/objective.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { MeditacionesComponent } from './components/meditaciones/meditaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RutinasComponent } from './components/rutinas/rutinas.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
   { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'objetivos',component:ObjetivosComponent}, 
  {path:'meditaciones',component:MeditacionesComponent},
  {path: 'rutinas',component:RutinasComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'agenda',component:AgendaComponent},
  { path: '**', redirectTo: '' }             
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    SidebarComponent,
    SubscriptionsComponent,
    MainComponent,
    MeditationComponent,
    BooksComponent,
    DirectoryComponent,
    MedComponent,
    FeelingsComponent,
    ObjectiveComponent,
    HomePageComponent,
    HomeComponent,
    ObjetivosComponent,
    MeditacionesComponent,
    PerfilComponent,
    AgendaComponent,
    RecoverPasswordComponent,
    RutinasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
      FormsModule,
  ReactiveFormsModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !isDevMode(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

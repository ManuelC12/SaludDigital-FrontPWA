import { NgModule } from '@angular/core';
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



const routes: Routes = [
  { path: '', component: LoginComponent },   // 👈 Ruta inicial
  { path: '**', redirectTo: '' }             // 👈 Si ponen una ruta que no existe, vuelve al login
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   // HomeComponent,
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
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
      FormsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

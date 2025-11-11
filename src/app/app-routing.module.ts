import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { BooksComponent } from './pages/books/books.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { FeelingsComponent } from './pages/feelings/feelings.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MedComponent } from './pages/med/med.component';
import { MeditationComponent } from './pages/meditation/meditation.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'subs', component: SubscriptionsComponent},
  {path: 'books', component: BooksComponent},
  {path: 'directory', component: DirectoryComponent},
  {path: 'feelings', component: FeelingsComponent},
  {path: 'homeP', component: HomePageComponent},
  {path: 'med', component: MedComponent},
  {path: 'meditate', component: MeditationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

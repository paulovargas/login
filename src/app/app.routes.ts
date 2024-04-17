import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'login' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
   },
   {
    path: 'login',
    component: LoginComponent
  }
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent 
    },
    {
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'novedades', component: NovedadesComponent 
    },
    { 
        path: 'registro', component: RegistroComponent 
    },
    { 
        //para el dueño
        path: 'usuarios', component:CrudUsuariosComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

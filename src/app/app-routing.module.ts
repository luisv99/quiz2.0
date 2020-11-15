import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './static/components/login/login.component';

const routes: Routes = [
{path:'login' , component: LoginComponent},
{path: '' , redirectTo:'home',pathMatch: 'full'},
{ path: 'home', loadChildren: () => import('./components/p/home/home.module').then(m => m.HomeModule) }, 
{ path: 'lista-personajes', loadChildren: () => import('./components/p/personajes/lista-personajes/lista-personajes.module').then(m => m.ListaPersonajesModule) },
{ path: 'lista-personajes', loadChildren: () => import('./components/p/personajes/lista-personajes/lista-personajes.module').then(m => m.ListaPersonajesModule) }, 
{ path: 'detalle-personaje/:id', loadChildren: () => import('./components/p/personajes/detalle-personajes/detalle-personajes.module').then(m => m.DetallePersonajesModule) }, 
{ path: 'home', loadChildren: () => import('./components/p/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

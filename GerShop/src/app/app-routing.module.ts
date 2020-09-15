import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccesopublicoComponent} from './components/accesopublico/accesopublico.component'
import {AccesoprivadoComponent} from './components/accesoprivado/accesoprivado.component'
import {RegistrarComponent} from './components/registrar/registrar.component'
import {IngresarComponent} from './components/ingresar/ingresar.component'

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/publico',
    pathMatch: 'full'
  },
  {
    path: 'publico',
    component: AccesopublicoComponent
  },
  {
    path: 'privado',
    component: AccesoprivadoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

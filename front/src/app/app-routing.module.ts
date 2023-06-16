import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplos/ejemplo5/ejemplo5.component';
import { Ejercicio1Component } from './components/ejercicios/ejercicio1/ejercicio1.component';
import { Ejercicio1vistaComponent } from './components/ejercicios/ejercicio1vista/ejercicio1vista.component';
import { Ejemplo6Component } from './components/ejemplos/ejemplo6/ejemplo6.component';
import { AgregarUsuarioComponent } from './components/ejemplos/agregar-usuario/agregar-usuario.component';

import { MostrarViajerosComponent } from './components/viajeros/mostrar-viajeros/mostrar-viajeros.component';
import { MostrarViajesComponent } from './components/viajes/mostrar-viajes/mostrar-viajes.component';
import { MostrarReferenciasComponent } from './components/referencias/mostrar-referencias/mostrar-referencias.component';
import { CrearViajerosComponent } from './components/viajeros/crear-viajeros/crear-viajeros.component';
import { ActualizarViajerosComponent } from './components/viajeros/actualizar-viajeros/actualizar-viajeros.component';
import { CrearViajesComponent } from './components/viajes/crear-viajes/crear-viajes.component';
import { ActualizarViajesComponent } from './components/viajes/actualizar-viajes/actualizar-viajes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'viajeros',
    component: MostrarViajerosComponent
  },
  {
    path: 'addviajeros',
    component: CrearViajerosComponent
  },
  {
    path: 'viajeros/edit/:id',
    component: ActualizarViajerosComponent
  },
  {
    path: 'viajes/edit/:id',
    component: ActualizarViajesComponent
  },
  {
    path: 'viajes',
    component: MostrarViajesComponent
  },
  {
    path: 'addviajes',
    component: CrearViajesComponent
  },
  {
    path: 'referencias',
    component: MostrarReferenciasComponent
  },
  {
    path: "ejemplo1",
    component: Ejemplo1Component
  },
  {
    path: "ejemplo2",
    component: Ejemplo2Component
  },
  {
    path: "ejemplo3",
    component: Ejemplo3Component
  },
  {
    path: "ejemplo4",
    component: Ejemplo4Component
  },
  {
    path: "ejemplo5",
    component: Ejemplo5Component
  },
  {
    path: "ejemplo6",
    component: Ejemplo6Component
  },
  {
    path: "ejercicio1",
    component: Ejercicio1Component
  },
  {
    path: "ejercicio1vista",
    component: Ejercicio1vistaComponent
  },
  {
    path: "ejemploAgregarUser",
    component: AgregarUsuarioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

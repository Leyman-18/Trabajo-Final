import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Ejemplo1Component } from './components/ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './components/ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplos/ejemplo5/ejemplo5.component';
import { Ejercicio1Component } from './components/ejercicios/ejercicio1/ejercicio1.component';
import { Ejercicio1vistaComponent } from './components/ejercicios/ejercicio1vista/ejercicio1vista.component';
import { Ejemplo6Component } from './components/ejemplos/ejemplo6/ejemplo6.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AgregarUsuarioComponent } from './components/ejemplos/agregar-usuario/agregar-usuario.component';
import { HttpClientModule } from '@angular/common/http';




import { InputTextModule } from 'primeng/inputtext';
import { ToastModule} from 'primeng/toast';
import { MessageService} from 'primeng/api';
import { MostrarViajerosComponent } from './components/viajeros/mostrar-viajeros/mostrar-viajeros.component';
import { MostrarViajesComponent } from './components/viajes/mostrar-viajes/mostrar-viajes.component';
import { MostrarReferenciasComponent } from './components/referencias/mostrar-referencias/mostrar-referencias.component';
import { CrearViajerosComponent } from './components/viajeros/crear-viajeros/crear-viajeros.component';
import { ActualizarViajerosComponent } from './components/viajeros/actualizar-viajeros/actualizar-viajeros.component';
import { ActualizarViajesComponent } from './components/viajes/actualizar-viajes/actualizar-viajes.component';
import { CrearViajesComponent } from './components/viajes/crear-viajes/crear-viajes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejercicio1Component,
    Ejercicio1vistaComponent,
    Ejemplo6Component,
    AgregarUsuarioComponent,
    MostrarViajerosComponent,
    MostrarViajesComponent,
    MostrarReferenciasComponent,
    CrearViajerosComponent,
    ActualizarViajerosComponent,
    ActualizarViajesComponent,
    CrearViajesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ToastModule
    // TabMenuModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

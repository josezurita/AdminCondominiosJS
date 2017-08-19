import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { CondominioComponent } from './Componentes/condominio/condominio.component';
import {ModuloDeRutas} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CondominioComponent
  ],
  imports: [
    BrowserModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

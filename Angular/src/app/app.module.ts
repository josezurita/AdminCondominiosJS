import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { CondominioComponent } from './Componentes/condominio/condominio.component';
import {ModuloDeRutas} from "./routes";
import { CuentasXPagarComponent } from './Componentes/cuentas-xpagar/cuentas-xpagar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CondominioComponent,
    CuentasXPagarComponent
  ],
  imports: [
    BrowserModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { CondominioComponent } from './Componentes/condominio/condominio.component';
import {ModuloDeRutas} from './routes';
import { CuentasXPagarComponent } from './Componentes/cuentas-xpagar/cuentas-xpagar.component';
import { LoginComponent } from './Componentes/login/login.component';
import { UnidadesHabitacionalesComponent } from './Componentes/unidades-habitacionales/unidades-habitacionales.component';
import { CuentasXcobrarComponent } from './Componentes/cuentas-xcobrar/cuentas-xcobrar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CondominioComponent,
    CuentasXPagarComponent,
    LoginComponent,
    UnidadesHabitacionalesComponent,
    CuentasXcobrarComponent
  ],
  imports: [
    BrowserModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

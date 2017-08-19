import {RouterModule, Routes} from "@angular/router";
import { InicioComponent } from './Componentes/inicio/inicio.component';

import {ModuleWithProviders} from "@angular/core";
import {CondominioComponent} from "./Componentes/condominio/condominio.component";
import {CuentasXPagarComponent} from "./Componentes/cuentas-xpagar/cuentas-xpagar.component";
/**
 * Created by Daniela Ramos on 21/06/2017.
 */

//variable constante de tipo route
export const routes:Routes = [

  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"condominio",
    component:CondominioComponent,

  },
  {
    path:"cuentasxpagar",
    component:CuentasXPagarComponent,

  }
]

export  const  ModuloDeRutas :ModuleWithProviders =
  RouterModule.forRoot(routes);

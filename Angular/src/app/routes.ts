import {RouterModule,  Routes} from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';

import {ModuleWithProviders} from '@angular/core';
import {CondominioComponent} from './Componentes/condominio/condominio.component';
import {CuentasXPagarComponent} from './Componentes/cuentas-xpagar/cuentas-xpagar.component';
import {LoginComponent} from './Componentes/login/login.component';
import {UnidadesHabitacionalesComponent} from './Componentes/unidades-habitacionales/unidades-habitacionales.component';
import {buildPath} from 'selenium-webdriver/http';
import {CuentasXcobrarComponent} from "./Componentes/cuentas-xcobrar/cuentas-xcobrar.component";
/**
 * Created by Daniela Ramos on 21/06/2017.


variable constante de tipo routes
*/
 export const routes:  Routes = [

  {
    path:  'condominio',
    component:  CondominioComponent,

  },
  {
    path:  'inicio',
    component:  InicioComponent,
    children:  [{
      path: 'unidades',
      component: UnidadesHabitacionalesComponent
    },  {
      path: 'cuentasXPagar',
      component: CuentasXPagarComponent
    }, {
      path: 'condominio',
      component: CondominioComponent
    }, {
      path: 'cuentasXCobrar',
      component: CuentasXcobrarComponent
    }

    ]
  },
  {
    path: 'cuentasxpagar',
    component: CuentasXPagarComponent,

  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'inicio',
        component:  InicioComponent,
      }
    ]
  }

];

export  const  ModuloDeRutas:  ModuleWithProviders =
  RouterModule.forRoot(routes);

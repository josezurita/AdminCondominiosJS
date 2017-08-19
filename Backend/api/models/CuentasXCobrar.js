/**
 * CuentasXCobrar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    connection: 'localDiskDb',
    attributes: {
      identificador:{
        type:'string'
      },
      descripcion: {
        type:'string'
      },
      mes: {
        type:'string'
      },
      anio: {
        type:'number'
      },
      fechapago: {
        type:'string'
      },
      valor: {
        type:'number'
      },
      idUnidad: {
        model:'UnidadHabitacional'
      },
      estado: {
        type:'booblean'
      }
    }
  }
};


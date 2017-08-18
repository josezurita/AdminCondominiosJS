/**
 * UnidadHabitacional.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identificacion: {
      type:'string'
    },
    descripcion: {
      type:'string'
    },
    estado: {
      type:'boolean'
    },
    idTipoUH: {
      model:'TipoUH'
    },
    cuentasXCobrar:{
      collection:'CuentasXCobrar',
      via:'idUH'
    }
  }
};


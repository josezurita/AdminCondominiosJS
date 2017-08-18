/**
 * CuentasXPagar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identificador:{
      type:'string'
    },
    descripcion: {
      type:'string'
    },
    fechaemision: {
      type:'string'
    },
    fechapago: {
      type:'string'
    },
    valor: {
      type:'number'
    },
    estado: {
      type:'boolean'
    },
    idCondominio: {
      model:'Condominio'
    },
    idProveedor: {
      model:'Proveedor'
    }
  }
};


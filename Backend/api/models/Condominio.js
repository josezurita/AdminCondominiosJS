/**
 * Condominio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'localDiskDb',
  attributes: {
    nombre:{
      type:'string'
    },
    direccion: {
      type:'string'
    },
    telefono: {
      type:'string'
    },
    balance: {
      type:'number'
    },
    usuariosAdministradores: {
      collection:'UsuarioCondominio',
      via:'idCondominio'
    },
    cuentasXPagar: {
      collection:'CuentasXPagar',
      via:'idCondominio'
    }
  }
};


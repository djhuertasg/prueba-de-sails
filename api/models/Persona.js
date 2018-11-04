/**
 * Persona.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {

  id_persona: {
    type: 'number',
    columnName: 'id_persona',
    required: true,
    autoIncrement:true,
    unique: true
  },
	nombreusuario: {
    type: 'number',
    columnName: 'documento_identidad',
    required: true,
    unique: true
  },
	activo: {
    type: 'string',
    columnName: 'activo',
    required:true
  },
	nombres: {
    type: 'string',
    columnName: 'nombres',
    required: true
  },
	apellidos: {
    type: 'string',
    columnName: 'apellidos',
    required: true
  },
	email: {
    type: 'string',
    columnName: 'correoelectronico',
    required: true,
    unique:true
  },
	telefono: {
    type: 'number',
    columnName: 'telefono',
    required: true
  },
	rol:{
    type: 'string',
    columnName: 'rol',
    required: true
  },
	password:{
    type: 'string',
    columnName: 'contrasenia',
    required: true
  },
	psicometra: {
    type: 'number',
    columnName: 'psicometra',
  },
	auxiliar: {
    type: 'number',
    columnName: 'Auxiliar_Psicometra',
  },
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
  beforeCreate: function(user, cb){
    
    //Encriptar clave
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, null, function(err, hash){
        if(err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }

};


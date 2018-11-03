/**
 * Respuesta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  id_respuesta: {
    type: 'number',
    columnName: 'id_respuesta',
    required: true,
    autoIncrement:true,
    unique: true
  },
	enunciado:{
    type: 'string',
    columnName: 'enunciado',
    required: true
  },

  // imagenenunciado: {
      //   type: '',
      //   columnName: 'imagenenunciado',
      // },

	justificacion:{
    type: 'string',
    columnName: 'justificacion',
    required: true
  },

	correcta: {
    type: 'string',
    columnName: 'correcta',
    required: true
  },

	fecha_creacion: {
        type: 'ref',
        columnType: 'timestamp',
        columnName: 'fecha_creacion',
      },

	multiple_tipo: {
    type: 'string',
    columnName: 'multiple_tipo',
  },

	id_pregunta: {
    type: 'number',
    columnName: 'id_pregunta',
  },
    
  },

};


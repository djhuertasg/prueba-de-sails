/**
 * js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      estado: {
        type: 'string',
        columnName: 'estado',
      },
      cargo: {
        type: 'string',
        columnName: 'cargo',
        required: true
      },
      tema: {
        type: 'string',
        columnName: 'tema',
        required: true
      },
      subtema: {
        type: 'string',
        columnName: 'subtema',
      },
      dificultad: {
        type: 'string',
        columnName: 'dificultad',
        required: true
      },
      pcognitivo: {
        type: 'string',
        columnName: 'procesocognitivo',
        required: true
      },
      dominio: {
        type: 'string',
        columnName: 'dominioconocimiento',
        required: true
      },
      situación: {
        type: 'string',
        columnName: 'situacion',
      },
      // imagensituacion: {
      //   type: '',
      //   columnName: 'imagensituacion',
      // },
      enunciado: {
        type: 'string',
        columnName: 'enunciado',
        required: true
      },
      // imagenenunciado: {
      //   type: '',
      //   columnName: 'imagenenunciado',
      // },
      tipopregunta: {
        type: 'string',
        columnName: 'tipopregunta',
        required: true
      },
      pertenencia: {
        type: 'string',
        columnName: 'pertenenciarelevancia',
        required: true
      },
      observaciones: {
        type: 'string',
        columnName: 'observaciones',
      },
      preguntapadre: {
        type: 'number',
        columnName: 'pregunta_padre',
      },
      fecha: {
        type: 'ref',
        columnType: 'timestamp',
        columnName: 'fecha_creacion',
      },

      //Referencia a personas
      owners: {
         collection: 'persona',
         via: 'preguntas'
      },

      //Referencia a respuestas
      respuestas: {
        collection: 'respuesta',
        via: 'owner'
      }

  },

};


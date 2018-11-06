/**
 * Tema.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tema: {
      type: 'string',
      columnName: 'tema',
      required: true
    },
    definicion: {
      type: 'string',
      columnName: 'definicion',
      required: true
    },

    //Referencia a subtemas
    subtemas: {
      collection: 'subtema',
      via: 'relation'
    }

  },

};


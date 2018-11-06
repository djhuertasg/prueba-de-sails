/**
 * Subtema.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    definicion: {
      type: 'string',
      required: true
    },

    //Referencia a temas
    relation: {
      model: 'tema'
    }

  },

};


module.exports = {


  friendlyName: 'Registrarpregunta',


  description: 'Registrarpregunta user.',


  inputs: {
    cargo: { type: "string" },
    tema: {type: "string"},
    subtema: {type: "string"},
    dificultad: {type: "string"},
    pcognitivo: {type: "string"},
    dominio: {type: "string"},
    situación: {type: "string"},
    enunciado: {type: "string"},
    tipopregunta: {type: "string"},
    pertenencia: {type: "string"},
    observaciones: {type: "string"},

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let req = this.req
    return req.redirect('/');

  }


};

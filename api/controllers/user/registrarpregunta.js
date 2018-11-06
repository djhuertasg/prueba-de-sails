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

    let req = this.req;
    let res = this.res;

    /*Validar que sea constructor*/

      var pregunta = new Object();
      pregunta.fecha = await sails.helpers.generatedate();
      //pregunta.estado = pregunta.estado;
      pregunta.cargo = inputs.cargo;
      pregunta.tema = inputs.tema;
      pregunta.subtema = inputs.subtema;
      pregunta.dificultad = inputs.dificultad;
      pregunta.pcognitivo = inputs.pcognitivo;
      pregunta.dominio = inputs.dominio;
      pregunta.situación = inputs.situación;
      pregunta.enunciado = inputs.enunciado;
      pregunta.tipopregunta = inputs.tipopregunta;
      pregunta.pertenencia = inputs.pertenencia;
      pregunta.observaciones = inputs.observaciones;

      var preguntaCreada = await Pregunta
        .create(pregunta).fetch()
        // Uniqueness constraint violation
        .catch({ code: 'E_UNIQUE' }, function (err) {
          res.sendStatus(409);
          return;
        })
        // Some other kind of usage / validation error
        .catch({ name: 'UsageError' }, function (err) {
          res.badRequest();
          return;
        })
        // If something completely unexpected happened.
        .catch(function (err) {
          res.serverError(err);
          return;
        })
        ;

      //sails.log('Pregunta creada', preguntaCreada.id);
      //return res.view("pages/respuestas");
      return res.redirect("/home");
  }

};

module.exports = {


  friendlyName: 'Registrarrespuesta',


  description: 'Registrarrespuesta user.',


  inputs: {
    correctanswer: {type: "string"},
    correctanswerjustification: {type: "string"},
    incorrectanswer1: {type: "string"},
    justificationincorrectanswer1: {type: "string"},
    incorrectanswer2: {type: "string"},
    justificationincorrectanswer2: {type: "string"},
    incorrectanswer3: {type: "string"},
    justificationincorrectanswer3: {type: "string"},
    modal: {type: "string"},
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let req = this.req;
    let res = this.res;

    /*Validar que sea constructor*/

      var respuesta = new Object();
      respuesta.correctanswer = inputs.correctanswer;
      respuesta.correctanswerjustification = inputs.correctanswerjustification;
      respuesta.incorrectanswer1 = inputs.incorrectanswer1;
      respuesta.justificationincorrectanswer1 = inputs.justificationincorrectanswer1;
      respuesta.incorrectanswer2 = inputs.incorrectanswer2;
      respuesta.justificationincorrectanswer2 = inputs.justificationincorrectanswer2;
      respuesta.incorrectanswer3 = inputs.incorrectanswer3;
      respuesta.justificationincorrectanswer3 = inputs.justificationincorrectanswer3;


      var respuestaCreada = await Respuesta
        .create(respuesta).fetch()
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

      sails.log('respuesta creada', respuestaCreada.id);
      
      if (inputs.modal=="S"){
        return res.redirect("/preguntas");
      }
      if (inputs.modal=="N"){
        return res.redirect("/inicio");
      }
  }


};

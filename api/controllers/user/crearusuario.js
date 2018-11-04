module.exports = {


    friendlyName: 'Crearusuario',
  
  
    description: 'Crearusuario usuario.',
  
  
    inputs: {
      nombreusuario: {
        type: 'number'
      },
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      nombres: {
        type: 'string'
      },
      apellidos: {
        type: 'string'
      },
      telefono: {
        type: 'number'
      },
      psicometra: {
        type: 'number'
      },
      auxiliar: {
        type: 'number'
      },
      rol: {
        type: 'string'
      },
      activo: {
        type: 'string'
      },
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs, exits) {
      let req = this.req;
      let res = this.res;
      //Recordar eliminar el campo administrador aquí
      if(inputs.rol!="C" && inputs.rol!="P" && inputs.rol!="X" && inputs.rol!="A")
        return res.badRequest("Parámetros inválidos");
      //Validar que no vengan campos vacios
  
      var persona = new Object()
      persona.email = inputs.email;
      persona.nombreusuario = inputs.nombreusuario;
      persona.password = inputs.password;
      persona.nombres = inputs.nombres;
      persona.apellidos = inputs.apellidos;
      persona.telefono = inputs.telefono;
      persona.psicometra = inputs.psicometra;
      persona.auxiliar = inputs.auxiliar;
      persona.rol = inputs.rol;
      persona.activo = inputs.activo;
      //Validar que no exista persona
      // await Persona.find({ email: user.email }, function (err, persona) {
      //   if (err || !persona)
      //     return cb("some error message");
      //   if (persona.length > 0)
      //     return cb("Ya existe registrada una persona con el correo " + persona.email);
  
  
      // }); 
  
      var personaBD = await Persona.find({ email: persona.email }).catch(function (err) {
        return res.serverError(err);
      });;
      if(personaBD.length > 0)
          return res.badRequest("Ya existe registrada una persona con el correo " + personaBD[0].email);
      //Crear persona
      var createdUser = await Persona
        .create(persona).fetch()
        // Uniqueness constraint violation
        .catch({ code: 'E_UNIQUE' }, function (err) {
          res.sendStatus(409);
          return;
        })
        // Some other kind of usage / validation error
        .catch({ name: 'UsageError' }, function (err) {
          res.badRequest("Error de validación");
          return;
        })
        // If something completely unexpected happened.
        .catch(function (err) {
          res.serverError(err);
          return;
        })
        ;
  
      sails.log('Usuario creado\'s id :', createdUser.id);
      return res.view("pages/register", { mensaje: "Persona creada correctamente" });
  
  
    }
  
  
  };
  
/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    inicio: function (req,res){
        if (req.user) {
            return res.view("pages/inicio", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    perfil: function (req, res) {
        
        if (req.user) {
            return res.view("pages/perfil", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    registrarp: function (req, res) {
        
        if (req.user) {
            return res.view("pages/registrarpregunta", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    respuestas: function (req, res) {
        
        if (req.user) {
            return res.view("pages/respuestas", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    actualizarp: function (req, res) {
        
        if (req.user) {
            return res.view("pages/actualizarpregunta", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    reportari: function (req, res) {
        
        if (req.user) {
            return res.view("pages/reportarinconsistencia", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },

    registrarusuario: function (req, res) {
        
        if (req.user) {
            return res.view("pages/register", { user: req.user });
        } else {
            return res.redirect('/');
        }
    },
       
};


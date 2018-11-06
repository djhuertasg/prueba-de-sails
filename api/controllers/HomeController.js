/**
 * HomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    home: function (req, res) {
        
        if (req.user) {
            return res.view("pages/home", { user: req.user });
        } else {
            return res.redirect('/');
        }
        
    }
};


/**
 * TemaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    readJsonFile: function (req, res) {

        const jsonfile = require('jsonfile');
        var file = './assets/json/data.json';
        jsonfile.readFile(file, function (err, obj) {
          if (err) {
            res.json({err: err});
          }
          console.dir(obj)
          res.json({obj: obj});
        })
      }

};


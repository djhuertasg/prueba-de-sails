module.exports = {


  friendlyName: 'Secondlogin',


  description: 'Secondlogin something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var speakeasy = require('speakeasy');

    var secret = speakeasy.generateSecret();
    console.log(secret.base32); // Save this value to your DB for the user

    var QRCode = require('qrcode');

    QRCode.toDataURL(secret.otpauth_url, function(err, image_data) {
    console.log(image_data); // A data URI for the QR code image
    });

    return exits.success();

  }


};

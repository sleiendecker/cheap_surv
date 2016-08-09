const nodemailer = require('nodemailer');
const fs         = require('fs');
const user       = require('./config/auth');
const smtpConfig = require('./config/smtp');


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpConfig);

module.exports = function(mailOptions, fileName, encodedString, cb) {
  // modify mailOptions attachments property
  mailOptions.attachments =  [{
    filename: fileName,
    content: encodedString,
    encoding: 'base64'
  }]
  console.log(`Sending file: ${fileName}`)
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(!error){
      cb(null, info.response);
    }
  });
}
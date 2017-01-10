const nodemailer = require('nodemailer'),
fs               = require('fs'),
user             = require('./config/auth'),
smtpConfig       = require('./config/smtp');


// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpConfig);

module.exports = (mailOptions, fileName, encodedString, cb) => {
  // modify mailOptions attachments property
  mailOptions.attachments =  [{
    filename: fileName,
    content: encodedString,
    encoding: 'base64'
  }]

  var n = fileName.lastIndexOf('/');
  console.log(`\nMotion detected!\nSending: '${fileName.substring(n+1)}'`)
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if(!error){
      cb(null, info.response);
    }
  });
}
const user = require('../config/auth');

module.exports = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      user: user.email,
      pass: user.password
  }
};

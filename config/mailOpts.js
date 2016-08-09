const moment = require('moment');
const user = require('../config/auth');

const date = moment().format("MMMM Do YYYY, h:mm:ss a")

module.exports = {
    from: user.email,
    to: user.email,
    subject: `Motion detected on ${date}`,
    html: `<b>Image attached</b>`
};
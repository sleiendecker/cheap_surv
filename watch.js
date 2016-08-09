const fs        = require('fs');
const chokidar  = require('chokidar');
const mailer    = require('./mailer');
const validator = require('./validator')
const mailOpts  = require('./config/mailOpts');


function base64Encode(file) {
  let bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

module.exports = function(dir, cb) {
  let watcher = chokidar.watch(dir, {
    ignored: /[\/\\]\./,
    persistent: true
  });

  watcher
    .on('add', (filePath) => {
      if (validator(filePath)){
        mailer(mailOpts, filePath, base64Encode(filePath), (err, res) => {
          if (!err) {
            cb(null, res);
          }
        });
      }
    })
}
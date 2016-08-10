const fs        = require('fs');
const chokidar  = require('chokidar');
const glob      = require('glob');
const mailer    = require('./mailer');
const mailOpts  = require('./config/mailOpts');

const validExtensions = 'jpeg|jpg|png|bmp'



function base64Encode(file) {
  let bitmap = fs.readFileSync(file);
  return new Buffer(bitmap).toString('base64');
}

module.exports = function(dir, cb) {
  console.log(`Watching dir: ${dir}`);
  let watcher = chokidar.watch(dir, {
    ignored: /[\/\\]\./,
    persistent: true
  });

  watcher.on('add', (filePath) => {
    glob(`${dir}/**/*(${validExtensions})`, (err, files) => {
      if (!err) {
        mailer(mailOpts, filePath, base64Encode(filePath), (err, res) => {
          if (!err) {
            cb(null, res);
          }
        });
      }
    });
  });
}
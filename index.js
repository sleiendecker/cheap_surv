const runWatcher = require('./watch');
path             = require('path'),
dir              = path.join(__dirname, 'images'),
glob             = require('glob');


runWatcher(dir, (err, res) => {
  if (!err) {
    console.log(`Success: ${res}`);
  }
})
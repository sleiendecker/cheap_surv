const runWatcher = require('./watch');
const path       = require('path');
const dir        = path.join(__dirname, 'images');
const glob       = require('glob');


runWatcher(dir, function(err, res){
  if (!err) {
    console.log(`Success: ${res}`);
  }
})
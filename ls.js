const fs = require('fs');

function ls(done) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      // process.stdout.write(files.join('\n'))
      // process.stdout.write("\nprompt > ")
      done(files.join('\n'));
    }
  });
}

module.exports = ls;

const fs = require('fs');

// function cat(){
//   fs.readdir('./', 'utf8', (err, files)=> {
//     if(err){
//       throw err
//     } else {
//       process.stdout.write(files.join('\n'))
//       process.stdout.write("\nprompt > ")
//     }
//   })
// }

// module.exports = cat;

module.exports = (filename, done) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      done(err.stack);
    } else {
      done(data);
    }
  });
};

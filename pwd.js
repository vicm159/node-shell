// function pwd() {
//   return process.stdout.write(__dirname);
// }

function pwd(done) {
  return done(process.cwd());
}

module.exports = pwd;

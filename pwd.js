function pwd() {
  return process.stdout.write(__dirname);
}

module.exports = pwd;

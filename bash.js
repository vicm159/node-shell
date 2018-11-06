process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    let output = require('./pwd');
    output();
  }
  //process.stdout.write(cmd);
  process.stdout.write('\npromt > ');
});

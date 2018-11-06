process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    let output = require('./pwd');
    output();
  }

  if(cmd === 'ls'){
    let output = require('./ls')
    output()
  }

  //process.stdout.write(cmd);
  process.stdout.write('\nprompt > ');
});

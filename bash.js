process.stdout.write('prompt >');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  let output = require(`./${cmd}`);
  output();

  process.stdout.write(cmd);
  process.stdout.write('\nprompt > ');
});

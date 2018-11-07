// process.stdout.write('prompt >');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   let output = require(`./${cmd}`);
//   output();

//   process.stdout.write(cmd);
//   process.stdout.write('\nprompt > ');
// });

const pwd = require('./pwd');

const prompt = data => {
  console.log(data);
  process.stdout.write('> ');
};

prompt('welcome to Node Shell');

process.stdin.on('data', data => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');

  switch (command) {
    case 'pwd':
      pwd(prompt);
      break;
    case 'ls':
      require('./ls')(prompt);
      break;
    case 'cat':
      require('./cat')(arg, prompt);
      break;

    case 'curl':
      require('./curl')(arg, prompt);
    default:
      prompt('not found');
  }
});

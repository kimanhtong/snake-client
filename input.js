let connection;
const handleUserInput = (msg) => {
  if (msg === '\u0003') {  // Exit with ctrl c
    console.log('Goodbye!');
    process.exit();
  }
  let msgUpCase = msg.toUpperCase();
  let movement = {
    W: 'up',
    A: 'left',
    S: 'down',
    D: 'right'
  };
  if (Object.keys(movement).indexOf(msgUpCase) > -1) {
    connection.write(`Move: ${movement[msgUpCase]}`);
  }

  let chat = {
    OMG: 'Oh My God!',
    IDK: 'I don\'t know.',
    LMK: 'Let me know.',
    NVM: 'Never mind!',
    OFC: 'Of course',
    HL: 'Hello!',
    HRU: 'How are you?',
    G2G: 'I\'ve got to go.',
    SUS: 'See you soon!'
  };
  if (Object.keys(chat).indexOf(msgUpCase) > -1) {
    connection.write(`Say: ${chat[msgUpCase]}`);
  };
}
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', (data) => {
    return handleUserInput(data);
  });

}

module.exports = setupInput;
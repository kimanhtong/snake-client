let connection;
const handleUserInput = (msg) => {
  if (msg === '\u0003') {  // Exit with ctrl c
    console.log('Goodbye!');
    process.exit();
  }
  let msgUpCase = msg.toUpperCase();
  let movement = ['W', 'A', 'S', 'D'];
  if (movement.indexOf(msgUpCase) > -1) {
    msgUpCase === 'W' ? console.log('up') : 
    msgUpCase === 'A' ? console.log('left') :
    msgUpCase === 'S' ? console.log('down') :
    msgUpCase === 'D' ? console.log('right') : console.log('');
    return;
  }

  let chat = ['OMG', 'IDK', 'LMK', 'NVM', 'OFC', 'HLA', 'HRU', 'HMU'];
  if (chat.indexOf(msgUpCase) > -1) {
    connection.write(`Say: ${msgUpCase}`);
    /*connection.on('connect', () => {
      connection.write(`Say: ${msgUpCase}`);
    });*/
  }
  return msg;
};
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
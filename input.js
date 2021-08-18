let connection;
const handleUserInput = (key) => {
  if (key === '\u0003') {  // Exit with ctrl c
    console.log('Goodbye!');
    process.exit();
  }
  if (key === 'w') { // Move up with w
    console.log('up')
  }
  if (key === 'a') { // Move left with a
    console.log('left')
  }
  if (key === 's') { // Move down with s
    console.log('down')
  }
  if (key === 'd') { // Move right with d
    console.log('right')
  }
  return key;
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
  
  stdin.on('data', data => {
    return handleUserInput(data);
  });
}

module.exports = setupInput;
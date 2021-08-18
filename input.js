const handleUserInput = (key) => {
  if(key === '\u0003') {  // Exit with ctrl c
    console.log('Goodbye!');
    process.exit();
  } else {
    return key;
  }
};
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', data => {
    return handleUserInput(data);
  });
}

module.exports = setupInput;
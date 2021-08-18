// IP: 10.0.2.15 PORT: 50541   

const connect = require ('./client');
const setupInput = require ('./input');

console.log('Connecting ...');
connect();
setupInput();

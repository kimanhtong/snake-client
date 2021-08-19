const net = require('net');
const {ip, port} = require('./constants')
//const ip = '10.0.2.15';
//const port = 50541;
/**
 * Establishes connection with the game server
 */
 const connect = function() {
  const conn = net.createConnection({ 
    ip,
    port
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write('Name: ANH');
  });
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

module.exports = connect;

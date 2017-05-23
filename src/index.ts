/**
 * This server will echo everything it receives back to the caller of the mapped interface.
 * This is to simulate the downstream system of the Matching Service.
 * Only the GET method is implemented. All other REST methods will return a 500 error.
 * There are some key data elements you can pass to cuase the system to simulate
 * an error condition if needed for test the calling matching service.
 * 
 * @author Ron Winacott <ron.winacott@securekey.com>
 * @version 1.0
 * @copyright 2017 by SecureKey. All rights reserved.
 *
 */

//console.log("Starting the Echo REST Server.");

import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('Echo:server');

const port = normalizePort(process.env.PORT || 3000);
App.set('port', port);

const server = http.createServer(App);
server.listen(port);
console.log("Starting the Echo Server at http://localhost:"+port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: number|string): number|string|boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

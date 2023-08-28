require('dotenv').config();

require( 'colors' );

console.log( `${process.env.NODE_ENV}` );

import Server from './models/Server';

const server = new Server();

server.execute();
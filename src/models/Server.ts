import colors from 'colors';
import express, { Express } from 'express';
import { createServer } from 'https';
import http from 'http';
import fs from 'fs';
import cors from 'cors';

import userRoutes from '../routes/user';
class Server {
    private app: Express;
    private server: any;
    public port: number;

    constructor() {
        this.app = express();
        this.port = parseInt( `${ process.env.PORT }` );
        this.server = http.createServer( this.app );
    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( cors( { origin: '*' } ) );
        this.app.use( '/api/user', userRoutes );
    }

    execute() {

        this.middlewares();
        this.server.listen( this.port, () => {
            console.log( `Server Settings ready in http://localhost:${ this.port }`.rainbow );
        } );
    }
}

export default Server;